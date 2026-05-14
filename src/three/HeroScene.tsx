import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

/* ─── Particles ─────────────────────────────────────────── */
function ParticleField({ count = 1400 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null!)

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 32
      pos[i * 3 + 1] = (Math.random() - 0.5) * 22
      pos[i * 3 + 2] = (Math.random() - 0.5) * 18
      // alternate between brand blue and cyan
      const isCyan = Math.random() > 0.45
      col[i * 3]     = isCyan ? 0.12 : 0.18
      col[i * 3 + 1] = isCyan ? 0.82 : 0.48
      col[i * 3 + 2] = 1.0
    }
    return { positions: pos, colors: col }
  }, [count])

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    g.setAttribute('color',    new THREE.BufferAttribute(colors, 3))
    return g
  }, [positions, colors])

  useFrame(({ clock }) => {
    mesh.current.rotation.y = clock.elapsedTime * 0.018
    mesh.current.rotation.x = clock.elapsedTime * 0.009
  })

  return (
    <points ref={mesh}>
      <primitive object={geo} attach="geometry" />
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  )
}

/* ─── Wireframe Crystal ──────────────────────────────────── */
interface CrystalProps {
  position: [number, number, number]
  scale?: number
  speed?: number
  color?: string
  detail?: 0 | 1 | 2
}

function Crystal({ position, scale = 1, speed = 1, color = '#00d4ff', detail = 0 }: CrystalProps) {
  const mesh = useRef<THREE.Mesh>(null!)
  const initY = position[1]

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    mesh.current.rotation.x = t * 0.25 * speed
    mesh.current.rotation.y = t * 0.4  * speed
    mesh.current.position.y = initY + Math.sin(t * 0.45 * speed) * 0.35
  })

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <icosahedronGeometry args={[1, detail]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.45}
        emissive={color}
        emissiveIntensity={0.6}
      />
    </mesh>
  )
}

/* ─── Central Torus Knot ─────────────────────────────────── */
function CentralFeature() {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    mesh.current.rotation.x = clock.elapsedTime * 0.12
    mesh.current.rotation.y = clock.elapsedTime * 0.18
    mesh.current.rotation.z = clock.elapsedTime * 0.06
  })

  return (
    <mesh ref={mesh} position={[0, 0, -10]}>
      <torusKnotGeometry args={[2.2, 0.35, 128, 16, 2, 3]} />
      <meshStandardMaterial
        color="#00d4ff"
        wireframe
        transparent
        opacity={0.12}
        emissive="#00d4ff"
        emissiveIntensity={0.25}
      />
    </mesh>
  )
}

/* ─── Edge constellation lines (stays on periphery) ─────── */
function ConstellationLines() {
  const lineRef = useRef<THREE.LineSegments>(null!)

  const { geo } = useMemo(() => {
    const pts: number[] = []
    // Nodes pushed to the edges — avoid center (|x| > 5 or |y| > 4)
    const nodes: [number, number, number][] = Array.from({ length: 20 }, () => {
      const side = Math.random() > 0.5 ? 1 : -1
      return [
        side * (5 + Math.random() * 8),
        (Math.random() - 0.5) * 12,
        -6 - Math.random() * 8,
      ]
    })
    const threshold = 5
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i][0] - nodes[j][0]
        const dy = nodes[i][1] - nodes[j][1]
        const dz = nodes[i][2] - nodes[j][2]
        if (Math.sqrt(dx*dx + dy*dy + dz*dz) < threshold) {
          pts.push(...nodes[i], ...nodes[j])
        }
      }
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pts), 3))
    return { geo: g }
  }, [])

  useFrame(({ clock }) => {
    lineRef.current.rotation.y = clock.elapsedTime * 0.01
    lineRef.current.rotation.x = clock.elapsedTime * 0.006
  })

  return (
    <lineSegments ref={lineRef}>
      <primitive object={geo} attach="geometry" />
      <lineBasicMaterial color="#2d7dff" transparent opacity={0.1} />
    </lineSegments>
  )
}

/* ─── Mouse parallax group ───────────────────────────────── */
function MouseGroup({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null!)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth  - 0.5) * 2
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame(() => {
    group.current.rotation.y += (mouse.current.x * 0.12 - group.current.rotation.y) * 0.04
    group.current.rotation.x += (mouse.current.y * 0.07 - group.current.rotation.x) * 0.04
  })

  return <group ref={group}>{children}</group>
}

/* ─── Inner scene ────────────────────────────────────────── */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 6, 2]}   color="#1a6fff" intensity={2} distance={35} />
      <pointLight position={[-10, -4, 4]} color="#00d4ff" intensity={1.5} distance={30} />

      <fog attach="fog" args={['#030c1a', 20, 45]} />

      <MouseGroup>
        {/* Fewer particles, smaller, pushed to background */}
        <ParticleField count={800} />

        {/* Lines only on periphery */}
        <ConstellationLines />

        {/* Crystals on the sides — avoid x in (-4, 4) */}
        <Crystal position={[-7,   1.5, -5]}  scale={1.2} speed={0.6}  color="#00d4ff" />
        <Crystal position={[ 7,  -1.0, -6]}  scale={1.0} speed={1.0}  color="#2d7dff" />
        <Crystal position={[-6,  -3.0, -7]}  scale={1.4} speed={0.5}  color="#2d7dff" />
        <Crystal position={[ 6.5, 3.0, -8]}  scale={1.6} speed={0.45} color="#00d4ff" />
        <Crystal position={[-5,   4.0, -9]}  scale={0.8} speed={0.7}  color="#00d4ff" detail={1} />
        <Crystal position={[ 5,  -4.0, -8]}  scale={0.9} speed={0.8}  color="#2d7dff" detail={1} />

        {/* Background torus knot — very far back, very transparent */}
        <CentralFeature />
      </MouseGroup>

      <EffectComposer>
        <Bloom
          intensity={0.55}
          luminanceThreshold={0.18}
          luminanceSmoothing={0.03}
          mipmapBlur
        />
      </EffectComposer>
    </>
  )
}

/* ─── Exported Canvas ────────────────────────────────────── */
export function HeroScene() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 9], fov: 58 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 1.5]}
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <color attach="background" args={['#030c1a']} />
        <Scene />
      </Canvas>
    </div>
  )
}

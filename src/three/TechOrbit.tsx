import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

/* Orbiting nodes around a central sphere */
function OrbitalRing({ radius, count, color, speed, tilt }: {
  radius: number; count: number; color: string; speed: number; tilt: number
}) {
  const group = useRef<THREE.Group>(null!)

  const positions = useMemo(() =>
    Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2
      return new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius)
    }),
  [count, radius])

  useFrame(({ clock }) => {
    group.current.rotation.y = clock.elapsedTime * speed
  })

  return (
    <group ref={group} rotation={[tilt, 0, 0]}>
      {/* Ring path */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.008, 8, 64]} />
        <meshBasicMaterial color={color} transparent opacity={0.15} />
      </mesh>

      {/* Node dots */}
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={1.5}
          />
        </mesh>
      ))}
    </group>
  )
}

function CentralSphere() {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    mesh.current.rotation.y = clock.elapsedTime * 0.15
    mesh.current.rotation.x = clock.elapsedTime * 0.08
  })

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[0.6, 1]} />
      <meshStandardMaterial
        color="#00d4ff"
        wireframe
        transparent
        opacity={0.5}
        emissive="#00d4ff"
        emissiveIntensity={0.8}
      />
    </mesh>
  )
}

function TechScene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[4, 4, 4]}   color="#2d7dff" intensity={3} />
      <pointLight position={[-4, -4, 4]} color="#00d4ff" intensity={2} />

      <CentralSphere />
      <OrbitalRing radius={1.4} count={6}  color="#00d4ff" speed={0.6}  tilt={0.3} />
      <OrbitalRing radius={2.1} count={8}  color="#2d7dff" speed={-0.4} tilt={1.1} />
      <OrbitalRing radius={2.9} count={10} color="#00d4ff" speed={0.25} tilt={0.7} />

      <EffectComposer>
        <Bloom intensity={1.2} luminanceThreshold={0.05} luminanceSmoothing={0.02} mipmapBlur />
      </EffectComposer>
    </>
  )
}

export function TechOrbit({ size = 320 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size, flexShrink: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        style={{ width: '100%', height: '100%' }}
      >
        <color attach="background" args={['#030c1a']} />
        <TechScene />
      </Canvas>
    </div>
  )
}

import { Header }       from './components/Header'
import { Footer }       from './components/Footer'
import { Hero }         from './sections/hero/Hero'
import { QuemSomos }    from './sections/sobre/QuemSomos'
import { Servicos }     from './sections/servicos/Servicos'
import { Projetos }     from './sections/projetos/Projetos'
import { StackTecnico } from './sections/stack/StackTecnico'
import { Diferenciais } from './sections/diferenciais/Diferenciais'
import { Contato }      from './sections/contato/Contato'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Servicos />
        <Projetos />
        <StackTecnico />
        <Diferenciais />
        <Contato />
      </main>
      <Footer />
    </>
  )
}

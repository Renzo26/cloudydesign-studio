import { Header }      from './components/Header'
import { Footer }      from './components/Footer'
import { Hero }        from './sections/hero/Hero'
import { QuemSomos }   from './sections/sobre/QuemSomos'
import { Servicos }    from './sections/servicos/Servicos'
import { Projetos }    from './sections/projetos/Projetos'
import { Configurador } from './sections/configurador/Configurador'
import { Contato }     from './sections/contato/Contato'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Servicos />
        <Projetos />
        <Configurador />
        <Contato />
      </main>
      <Footer />
    </>
  )
}

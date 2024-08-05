import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos relevantes</Titulo>
    <Lista>
      <Projeto
        names={[
          'TwitterX-Fullstack',
          'Efood',
          'duck-contacts',
          'WavesReact',
          'COC-Projeto-Aveiro',
          'linktree-aveiro'
        ]}
      />
    </Lista>
  </section>
)

export default Projetos

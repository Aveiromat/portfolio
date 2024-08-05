import Avatar from '../../components/Avatar'
import Contact from '../../components/Contact'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  tema: 'light' | 'dracula'
  trocaTema: () => void
}

const Sidebar = ({ trocaTema }: Props) => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Matheus Aveiro</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          aveiromat
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Engenheiro Full Stack
        </Descricao>
        <Contact />
        <BotaoTema onClick={trocaTema}>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar

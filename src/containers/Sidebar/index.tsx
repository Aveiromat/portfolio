import Avatar from '../../components/Avatar'
import Contact from '../../components/Contact'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao, BotaoTema, SidebarContainer, Center } from './styles'

type Props = {
  tema: 'light' | 'dracula'
  trocaTema: () => void
}

const Sidebar = ({ tema, trocaTema }: Props) => {
  return (
    <aside>
      <SidebarContainer>
        <Center>
          <Avatar />
        </Center>
        <Titulo fontSize={20}>Matheus Aveiro</Titulo>
        <Center>
          <Paragrafo tipo="secundario" fontSize={12}>
            @aveiromat
          </Paragrafo>
        </Center>
        <Center>
          <Descricao tipo="principal" fontSize={12}>
            Engenheiro Full Stack
          </Descricao>
        </Center>
        <Contact tema={tema} />
        <BotaoTema onClick={trocaTema}>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar

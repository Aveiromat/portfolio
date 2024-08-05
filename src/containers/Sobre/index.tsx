import React from 'react'
import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

type Props = {
  tema: 'light' | 'dracula'
}

const Sobre = ({ tema }: Props) => {
  const theme = tema

  return (
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo tipo="principal">
        Desde pequeno, sabia que queria trabalhar com tecnologia. Adorava passar
        horas com minha família me divertindo no computador. Hoje, tenho um
        profundo interesse nessa área porque acredito que a tecnologia conecta
        as pessoas e facilita nossas vidas, permitindo que gastemos menos tempo
        com tarefas repetitivas e mais tempo com quem amamos. Trabalho criando
        softwares como soluções para melhorar a vida das pessoas, proporcionando
        mais tempo para o que realmente importa.
      </Paragrafo>
      <GithubSecao>
        <img
          src={`https://github-readme-stats.vercel.app/api?username=aveiromat&show_icons=true&theme=${theme}&include_all_commits=true&count_private=true`}
          alt="Estatísticas do GitHub"
        />
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=aveiromat&layout=compact&langs_count=7&theme=${theme}`}
          alt="Linguagens mais usadas"
        />
      </GithubSecao>
    </section>
  )
}

export default Sobre

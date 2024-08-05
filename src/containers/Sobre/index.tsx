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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit soluta
        quidem eum deleniti et qui. Sit ab tempora eligendi vero eaque
        accusantium corrupti enim delectus voluptatem error odio, soluta
        distinctio.
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

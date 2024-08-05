import { useState, useEffect } from 'react'
import axios from 'axios'
import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'

interface Repo {
  id: number
  name: string
  description: string
  html_url: string
}

const Projeto = () => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://api.github.com/users/Aveiromat/repos')
      .then((response) => {
        setRepos(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Carregando...</div>
  }

  return (
    <>
      {repos.map((repo) => (
        <Card key={repo.id}>
          <Titulo>{repo.name}</Titulo>
          <Paragrafo tipo="secundario">
            {repo.description || 'No description available'}
          </Paragrafo>
          <LinkBotao
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visualizar
          </LinkBotao>
        </Card>
      ))}
    </>
  )
}

export default Projeto

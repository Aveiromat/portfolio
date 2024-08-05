import { useState, useEffect } from 'react'
import axios from 'axios'
import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, Grid, LinkBotao } from './styles'

interface Repo {
  id: number
  name: string
  description: string
  html_url: string
}

interface ProjetoProps {
  names: string[]
}

const Projeto = ({ names }: ProjetoProps) => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get<Repo[]>(
          'https://api.github.com/users/Aveiromat/repos?page=1&per_page=100'
        )
        const allRepos = response.data

        // Filtrar repositórios pelo nome
        const filteredRepos = allRepos.filter((repo) =>
          names.includes(repo.name)
        )
        setRepos(filteredRepos)
      } catch (error) {
        console.error(error)
        setError('Erro ao buscar repositórios')
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [names])

  if (loading) return <div>Carregando...</div>
  if (error) return <div>{error}</div>

  return (
    <>
      {repos.map((repo) => (
        <Card key={repo.id}>
          <Titulo>{repo.name}</Titulo>
          <Paragrafo tipo="secundario">
            {repo.description || 'No description available'}
          </Paragrafo>
          <Grid>
            <LinkBotao
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visualizar
            </LinkBotao>
          </Grid>
        </Card>
      ))}
    </>
  )
}

export default Projeto

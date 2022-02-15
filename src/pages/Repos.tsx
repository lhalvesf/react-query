import axios from 'axios'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

export function Repos() {

  type Repos = {
    name: string;
  }

  const { data: repos, isFetching } = useQuery<Repos[]>('repos', async () => {
    const response =  await axios.get('https://api.github.com/users/lhalvesf/repos')
    return response.data
  }, {
    // refetchOnWindowFocus: false
    staleTime: 1000 * 60
  })

  return (
    <div className="App">
      { repos && repos.map( (repo: Repos) =>
        <p>
          <Link to={`/repo/${repo.name}`} >{repo.name}</Link>
        </p>
      )}
    </div>
  )
}

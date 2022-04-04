import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, withRouter, useParams } from 'react-router-dom'

function Repo(props) {
  const { username } = props

  const [repoName, setRepoName] = useState('')
  const [repoUrl, serRepoUrl] = useState('')
  const { repo } = useParams()
  const getData = (ary) => {
    axios
      .get(`https://api.github.com/repos/${username}/${ary}`, {
        headers: {
          Authorization: process.env.REACT_APP_SECRET_CODE,
        },
      })
      .then(({ data }) => {
        setRepoName(data)
      })
  }
  const repoClick = () => window.open(repoUrl)

  useEffect(() => {
    serRepoUrl(`https://github.com/iamshaunjp/${repo}`)
    getData(repo)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className="flex items-center
      justify-center h-screen py-2
    bg-gray-900 text-gray-200 text-left"
    >
      <div className="w-2/3 h-1/2 text-4xl flex flex-col justify-around">
        <div>
          <span className="text-2xl">Full_name</span> : {repoName.full_name}
        </div>
        <div>
          <span className="text-2xl my-10">Description</span> :
          {repoName.description}
        </div>
        <div>
          <span className="text-2xl">StargazersCount</span> :
          {repoName.stargazers_count}
        </div>
        <div onClick={() => repoClick()}>
          <span className="cursor-pointer">點我連到Repo</span>
        </div>
        <button className="h-20">
          <Link to={`/users/${username}/repos`}>回首頁</Link>
        </button>
      </div>
    </div>
  )
}
export default withRouter(Repo)

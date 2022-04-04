import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Main(props) {
  const { username } = props
  let per_page = 10
  let page = 1
  const [repo, setRepo] = useState([])
  const getData = () => {
    const tenRepo = []
    axios
      .get(
        `https://api.github.com/users/${username}/repos?per_page=${per_page}&page=${page}`,
        {
          headers: {
            Authorization: process.env.REACT_APP_SECRET_CODE,
          },
        }
      )
      .then(({ data }) => {
        data.forEach((p) => tenRepo.push(p))
        setRepo((repo) => [...repo, ...tenRepo])
      })
    page += 1
    if (page > 11) {
      alert('已瀏覽結束')
      window.location.reload()
    }
  }

  const handleScroll = (e) => {
    const scrollHeight = e.target.documentElement.scrollHeight
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    )
    if (currentHeight + 1 >= scrollHeight) {
      getData()
    }
  }

  useEffect(() => {
    getData()
    window.addEventListener('scroll', handleScroll)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className="flex
      flex-col items-center
      justify-center min-h-screen py-2
    bg-gray-900 text-gray-200"
    >
      <div className="text-3xl my-10"> UserName : {username} </div>
      <div className="flex flex-col text-2xl font-bold items-center justify-center w-full px-20">
        {repo.map((p, i) => {
          return (
            <div
              key={i}
              className="border w-3/4 h-40 flex justify-around place-items-center max-w-5xl min-w-fit"
            >
              <div className="mx-5">{i + 1}.</div>
              <div>
                RepositoryName :
                <Link
                  to={`/users/${username}/repos/${p.name}`}
                  className="text-4xl cursor-pointer text-amber-200"
                >
                  {p.name}
                </Link>
                <br />
                stargazers_count :
                <span className="text-3xl cursor-pointer text-amber-200">
                  {p.stargazers_count}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

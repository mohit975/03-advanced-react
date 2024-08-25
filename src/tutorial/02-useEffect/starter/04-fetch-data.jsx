import { useEffect, useState } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(url)
        const users = await response.json()
        setUsers(users)
      } catch (error) {
        console.log(error)
      }
    }
    FetchData()
  }, [])
  return (
    <section>
      <h3>Github users</h3>
      <ul className="users">
        {users.map((user) => {
          return (
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.login}></img>
              <div>
                <h5>{user.login}</h5>
                <a href={user.html_url}>Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export default FetchData

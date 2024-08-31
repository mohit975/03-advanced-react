import { useState } from 'react'
import { data } from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [users, setUsers] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) return
    console.log(name)
    const fakeId = Date.now()
    const newUser = { id: fakeId, name }
    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)
    // console.log(name, email)
  }

  const removeUser = (id) => {
    const newList = users.filter((person) => person.id !== id)
    setUsers(newList)
  }

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button
              className="btn"
              onClick={() => {
                removeUser(user.id)
              }}
            >
              Remove user
            </button>
          </div>
        )
      })}

      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
    </div>
  )
}
export default UserChallenge

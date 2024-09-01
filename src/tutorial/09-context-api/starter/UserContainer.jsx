import { useContext } from 'react'
import { NavbarContext } from './Navbar'

const UserContainer = () => {
  const { user, logout } = useContext(NavbarContext)
  //   console.log({ user, logout })

  //   return 'Hello'
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There , {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            {' '}
            Logout
          </button>
        </>
      ) : (
        <p>Please Login </p>
      )}
    </div>
  )
}
export default UserContainer

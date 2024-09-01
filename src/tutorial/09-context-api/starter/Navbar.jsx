import { useState, createContext } from 'react'
import NavLinks from './NavLinks'

export const NavBarContext = createContext()

const Navbar = () => {
  const [user, setUser] = useState({ name: 'Bob' })
  const logout = () => {
    setUser(null)
  }
  return (
    <NavBarContext.Provider value={{}}>
      <nav className="navbar">
        <h5>Context API</h5>
        <NavLinks />
      </nav>
    </NavBarContext.Provider>
  )
}
export default Navbar

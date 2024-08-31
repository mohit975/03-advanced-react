import Example from './tutorial/04-project-structure/starter/Example'
import Navbar from './tutorial/04-project-structure/starter/Navbar'
import { About, Home } from './tutorial/04-project-structure/starter/Pages'

function App() {
  return (
    <div className="container">
      <Home />
      <About />
      <Example />
      {/* <Final /> */}
    </div>
  )
}

export default App

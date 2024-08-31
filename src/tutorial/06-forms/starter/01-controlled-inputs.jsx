import { useState } from 'react'

const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Controlled Inputs</h2>
      <div className="form-now">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-now">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          id="email"
          className="form-input"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  )
}
export default ControlledInputs

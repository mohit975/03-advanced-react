import { useState } from 'react'

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('')
  // truthy
  const [name, setName] = useState('susan')
  const [user, setUser] = useState({ name: 'john' })
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      {/* <button className="btn">{isEditing ? 'edit' : 'add'}</button> */}
      {user ? (
        <div>
          <h4>Hellow there {user.name}</h4>
        </div>
      ) : (
        <div>
          <h4>Please login </h4>
        </div>
      )}
    </div>
  )
}

export default ShortCircuitExamples

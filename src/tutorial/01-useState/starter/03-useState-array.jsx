import React from 'react'
import { data } from '../../../data'
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  const removPerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => removPerson(id)}>
              Remove
            </button>
          </div>
        )
      })}
      <button className="btn" onClick={() => setPeople([])}>
        ClearList
      </button>
    </div>
  )
}

export default UseStateArray

import React from 'react'

const UseStateObject = () => {
  const [person, func] = React.useState({
    name: 'Mohit',
    age: 33,
    hobby: 'look for job',
  })
  const update = () => {
    // func({
    //   name: 'Mohit 01',
    //   age: 34,
    //   hobby: 'look for job',
    // })

    func({ ...person, name: 'Mohit01' })
  }

  return (
    <div>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.hobby}</h2>
      <button className="btn" onClick={() => update()}>
        Show{' '}
      </button>
    </div>
  )
}

export default UseStateObject

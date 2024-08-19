import React from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = React.useState(0)

  const handleClick = () => {
    console.log('clicked')

    setTimeout(() => {
      setValue((currentState) => {
        return currentState + 1
      })
    }, 1000)
  }

  return (
    <div>
      <h4>{value}</h4>
      <button className="btn" onClick={() => handleClick()}>
        Increase
      </button>
    </div>
  )
}

export default UseStateGotcha

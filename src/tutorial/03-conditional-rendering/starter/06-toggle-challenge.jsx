import { useState, useEffect } from 'react'

const ToggleChallenge = () => {
  const [showAlert, setshowAlert] = useState(false)
  // const ToggerAlert = () => {
  //   if (showAlert) {
  //     setshowAlert(false)
  //     return
  //   }
  //   setshowAlert(true)
  // }
  return (
    <div>
      <button className="btn" onClick={() => setshowAlert(!showAlert)}>
        Toggel
      </button>
      {showAlert && <Alert />}
    </div>
  )
}

const Alert = () => {
  return <div className="alert alert-danger">Hello World</div>
}
export default ToggleChallenge

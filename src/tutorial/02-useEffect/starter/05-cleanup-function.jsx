import { useEffect } from 'react'
import { useState } from 'react'

const CleanupFunction = () => {
  const [toggel, setToggel] = useState(false)
  return (
    <div>
      <button className="btn" onClick={() => setToggel(!toggel)}>
        Toggel Component
      </button>
      {toggel && <RandomComponent />}
    </div>
  )
}

const RandomComponent = () => {
  useEffect(() => {
    const someFunch = () => {
      console.log('Scorlling')
    }
    window.addEventListener('scroll', someFunch)
    return () => removeEventListener('scroll', someFunch)
  }, [])
  return <h1>Hello There</h1>
}
export default CleanupFunction

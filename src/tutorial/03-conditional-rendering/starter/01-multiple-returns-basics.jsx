import { useEffect, useState } from 'react'

const MultipleReturnsBasics = () => {
  const [isloading, setISloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setISloading(false)
    }, 3000)
  }, [])
  if (isloading) {
    return <h2>IsLoading ... </h2>
  }
  return <h2>Multiple Returns Basics</h2>
}
export default MultipleReturnsBasics

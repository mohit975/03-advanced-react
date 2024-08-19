const ErrorExample = () => {
  let count = 0
  const handleclick = () => {
    count = count + 1
    console.log(count)
  }
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={handleclick} className="btn">
        Increase
      </button>
    </div>
  )
}

export default ErrorExample

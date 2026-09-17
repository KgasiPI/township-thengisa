
import react, { useState } from 'react'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="Home">
      <h1>Home</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default Home
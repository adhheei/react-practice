import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setcount] = useState(0)
  const [animate, setAnimate] = useState(false)

  const handleChange = (value) => {
    setcount(count + value)
    setAnimate(true)

    setTimeout(() => setAnimate(false), 200)
  }

  return (
    <div className="app-container">
      <div className="card">
        <h2>Counter App</h2>

        <h1 className={`count ${animate ? "animate" : ""}`}>
          {count}
        </h1>

        <div className="buttons">
          <button className="add" onClick={() => handleChange(1)}>+</button>
          <button className="sub" onClick={() => handleChange(-1)}>-</button>
        </div>

        <button className="reset" onClick={() => setcount(0)}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
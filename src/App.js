import React, {useState} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    let color = count > 0 ? 'green' : count < 0 ? 'red' : 'black'

    const decrease = () => setCount(count - 1)
    const resetCount = () => setCount(0)
    const increase = () => setCount(count + 1)

  return (
    <div className="app">
        <h1>Counter</h1>
        <span style={{color}} id="countNum">{count}</span>
        <div className="wrap-btns">
            <button onClick={decrease} className="decreaseNum">Decrease</button>
            <button onClick={resetCount} className="resetNum">Reset</button>
            <button onClick={increase} className="increaseNum">Increase</button>
        </div>
    </div>
  )
}

export default App
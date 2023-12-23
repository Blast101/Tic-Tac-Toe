import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board2 from './Tic-Tac-Toe/Board2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Board2/>
    </>
  )
}

export default App

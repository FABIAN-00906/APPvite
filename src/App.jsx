import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente1 from './components/componente1.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Componente1></Componente1>

    </>
  )
}

export default App

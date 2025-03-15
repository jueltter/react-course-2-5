import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NameForm from './components/NameForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Name</h1>
      <NameForm />
    </>
  )
}

export default App

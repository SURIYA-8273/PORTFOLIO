import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useTheme from './hooks/useTheme'

function App() {
  const [count, setCount] = useState(0)

  const{toggleTheme,theme}=useTheme();

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline text-black dark:text-yellow">
  Vite + React
</h1>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-3xl dark:text-7xl font-bold underline'>Vite + React</h1>
      <div className="card">
        <button onClick={toggleTheme}>
Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode        </button>
        <p className='text-2xl'>
          Edit <code>src/App.js</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './Pages/Login'
import Home from './Pages/Home.Jsx'
import Menu from './Pages/Menu'
import Cart from './Pages/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      {/* <Login/> */}
      <Menu/>
      <Cart/>
     </>
  )
}

export default App

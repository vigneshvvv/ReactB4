import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sample from './Sample'
import ParantComponent from './childProps/ParantComponent'
import RouterComponent from './childProps/RouterComponent'
import UserContext from './childProps/UserContext'



function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState("Hi");

  return (
    <>
    <UserContext.Provider value={{user}}>
    {/* <Sample />
    <ParantComponent/> */}
    <RouterComponent/>
    </UserContext.Provider>
    </>
  );
}

export default App

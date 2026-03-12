import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './HomePage'
import Contact from './Contact'
import UseStatepractice from './comonents/useStatePractice'
import InputComponents from './comonents/InputComponents'
import RouterComponent from './comonents/RouterComponent'
import TableToggleContent from './comonents/TableComponent/TableToggleContent'
import { Provider } from 'react-redux'
import { store } from './comonents/redux/store'
import AboutPage from './AboutPage'
import AnimationSample from './comonents/animation'
import ScrollAnimation from './comonents/scrollAnimation'


export const userContext = createContext();
function App() {

  let msg = "Hello !"
  let usage = "This is sample"
  let contact = "This is contact page";
  const [user, setUser] = useState({name: "vignesh"});
  let UserData = {
    sno: 1,
    FirstName: "Vignesh",
    lastName: "Kumar",
    email: "vk@gmail.com"

  }

  return (
    // <userContext.Provider value={{user}}>
<Provider store={store}>
        {/* <h1> {msg} Welcome to React Project </h1> */}
    {/* <h1>This is Sample Project</h1> */}
    {/* <HomePage msg={msg} usage= {usage}/> */}
    {/* <Contact contact = {contact} usage= {usage} userData = {UserData}/> */}
    {/* <UseStatepractice/> */}
    {/* <InputComponents/> */}
    {/* <RouterComponent/> */}
    {/* <AboutPage/> */}
    {/* <Contact/> */}
    {/* <AnimationSample/> */}
    <ScrollAnimation/>
       {/* <TableToggleContent/> */}
    {/* // </userContext.Provider> */}
    </Provider>
   
  )
}

export default App

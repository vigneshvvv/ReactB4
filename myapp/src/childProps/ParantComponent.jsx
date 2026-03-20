import { useContext } from "react";
import ChildComponent from "./ChildComponent";
import ConditionalRendering from "./ConditionalRendering";
import UseEffectExample from "./UseEffectExample";
import UserContext from "./UserContext";
import LoginContext from "../contextApi/loginContext";


function ParantComponent() {
    const data = {
        userName: "vignesh",
        password: "vignesh",
        role: "admin"
    }

    const {loginUser} = useContext(LoginContext)
    console.log("received value from login context", loginUser)

    const {user} = useContext(UserContext)

    return(
        <>
        <h1>Parant component content</h1>
        <h1>From context api {loginUser.username}</h1>
        {/* <ChildComponent userName = "Vignesh" exp = "5 years"/> */}
         <ChildComponent userDetails =  {data}/>
         <h1>{user}</h1>
         {/* <ConditionalRendering/> */}
         <UseEffectExample/>
        </>
    );
}

export default ParantComponent;
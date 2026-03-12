import { useContext } from "react";
import AboutPage from "./AboutPage";
import { userContext } from "./App";
import { loginContext } from "../src/comonents/loginContext";

function HomePage(props){
    let {msg, usage} = props;
    const { loginUser } = useContext(loginContext);
    console.log("user context value", loginUser);
   
    return(
        <>
        <h1> Welcome {loginUser.username}</h1>
        <AboutPage/>
        </>
    );
}

export default HomePage;
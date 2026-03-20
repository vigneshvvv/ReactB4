import { useContext, useState } from "react";
import UserContext from "./UserContext";


function ChildComponent({userDetails}){
// function ChildComponent({userName, exp}){
    // const userName = props.userName;
    // const exp = props.exp;

    // const {userName, exp} = props;

    // const {userDetails} = props;
    // const {userName, password, role} = userDetails;

    const[message, setMessage] = useState("");

    const handleClick = () => {
        if(userDetails.role === "admin"){
        setMessage(`welcome ${userDetails.userName}`)
    }else {
        setMessage(`sorry ${userDetails.userName}  you don't have access`);
    }

    }

    const {user} = useContext(UserContext);
    
    return (
        <>
        <button onClick={handleClick}>render</button>
        <h1> {message} </h1>
        <h1>{user} This is child component inside parant component</h1>
        </>
    );
}

export default ChildComponent;
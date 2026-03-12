import { useState } from "react";
import ChildComponent from "./ChildComponent";




function ParantComponent(){
 const [name, setName] = useState();

 function gettingValuefromChild(event){
    console.log(event);
    setName(event);
 }

    return(
        <>
        <h1>Hi this is Sample {name}</h1>
        <ChildComponent datafromChild = {gettingValuefromChild}/>
        
        </>
    );
}

export default ParantComponent;
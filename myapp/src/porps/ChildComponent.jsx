import { useMemo, useState } from "react";

function ChildComponent(props){


const [number, setNumber] = useState(0);
const [name, setName] = useState("");

const countFunction = () => {
console.log("running function");
 for(let i=0; i<10; i++){};
 return number*2;
}



const calculation = useMemo(() => {
   return countFunction();
    // return number*1000;

},[number])

const result = calculation;


const dataSend = () => {
    props.datafromChild("Testing");
}

    return(<>
    <button onClick={dataSend}>Send</button>
    <input type="text" onChange={(e) => setName(e.target.value)}/>
    <h1>The number is {result}</h1>

    <button onClick={() => setNumber(number+1)}>inc</button>
    
    </>);
}

export default ChildComponent;
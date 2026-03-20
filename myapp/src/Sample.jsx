import { use, useContext, useState } from "react";
import UserContext from "./childProps/UserContext";

function Sample(){
let sample = "This is sample text";
const[count, setCount] = useState(0);
const[name, setName] = useState("");

//old method of creating function
function add(){
    setCount(count+1);
}

const {user} = useContext(UserContext);


//creating function using arrow function
const addnew  = () => {
    setCount(count+1);
}

    return(
        <>
            <h1>{user} Welcome to React class</h1>
            <p>This is sample paragrah</p>
            <h1>The Count is {count}</h1>
              <button onClick={add}>Add</button>
            <button onClick={() => setCount(count+1)}>Add</button>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <h1>Welcome {name}</h1>
        </>
    );
}

export default Sample;
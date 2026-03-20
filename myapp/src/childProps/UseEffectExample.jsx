import { useEffect, useState } from "react";

function UseEffectExample() {
    const[count, setCount] = useState(0);

    useEffect(() => {
       const data = fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json()).then((e) => console.log(e));
        console.log("Use Effect Example");
    },[]);


    return (<>
    <h1>Use Effect Example</h1>
    <h2> Count is: {count}</h2>
    <button onClick={() => setCount(count+1)}>Increment</button>
    </>);
}

export default UseEffectExample;
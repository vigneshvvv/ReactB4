import { useRef, useState } from "react";

function UseRefExample(){
    const renderCount = useRef(0);
    // const [name, setName] = useState('');
    const[count, setCount] = useState(0);

    // renderCount.current = renderCount.current+1;

    return(<>
    <h1>This commonent have  {renderCount.current}</h1>
    <button onClick={() => setCount(count+1)}> Change name</button>
    <p>currentName {count}</p>
    
    </>);
}

export default UseRefExample;
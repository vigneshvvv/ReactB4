import { useEffect, useState } from "react";
import axios from 'axios';

function AxiosSample(){

    const[data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        axios.get("https://dummyjson.com/posts").then(e => console.log(e.data)).then(response => {
            setData(response.data)
        }).catch(error => setError(error.message));

    },[]);


    const handleSubmit = async () => {
        try{
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                userId:1,
                id: 123,
                body: "sample",
                title: "this is for testing"
            }); 
            console.log("api call was completed");

        }catch(error){
            console.log(error);
        }

    }


    const putApiCallExample = async(userId, userData) =>{
        try{

            const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${userId}`,{
                 userId:1,
                id: 123,
                body: "sample",
                title: "this is for testing"
            } );

        }catch(error){
            console.log(error);
        }
    }


 return(<>
 <h1>Axios Sample</h1>
 <button onClick={handleSubmit}>post</button>
 <button onClick={() => putApiCallExample(1, {})}>PUT</button>
 </>);   
}

export default AxiosSample;
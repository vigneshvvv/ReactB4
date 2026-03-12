import { useEffect, useState } from "react";
import Contact from "../Contact";
import AboutPage from "../AboutPage";

function UseStatepractice(){

    const[data, setData] = useState(0);
    const[user, setUser] = useState("This");

       const[product, setProduct] = useState("This");

    useEffect(() => {
      return () => {
        if(data > 5){
          setData(1);
        }
        console.log("use Effect working");
      }
    },[data])


    useEffect( () => {
      return async () => {
        const result = await fetch("https://dummyjson.com/products");
        const dataOutput = await result.json();
        console.log(dataOutput);
        setProduct(result);

      }
    },[]);
    // function incrementValue(){
    //     setData((previousvalue) => {return previousvalue+1})
    // }


    const incrementValue = () => {
        setData((previousvalue) =>  {
            
         let final=  previousvalue+1;
         if(final !== 10){
            return final;
         }else{
            return 1;
         }
        
        });
    }

    const isAvailable = false;

  let usage = "This is sample"
  let contact = "This is contact page";
  let UserData = {
    sno: 1,
    FirstName: "Vignesh",
    lastName: "Kumar",
    email: "vk@gmail.com"

  }

    return(
        <>
        <h1>The Data value is {data}</h1>
        <button onClick={incrementValue}>ADD</button>
        {isAvailable? <AboutPage/>: null}
        {UserData !== null ? <Contact contact = {contact} usage= {usage} userData = {UserData}/>:null}
        </>
    );
}

export default UseStatepractice;
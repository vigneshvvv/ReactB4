import { useDispatch } from "react-redux";
import { addCustomer, removeCustomer, updateCustomer } from "./comonents/redux/customerSlice";

function AboutPage(){


    const despatch = useDispatch();


    const sendtoredux = () => {
      despatch(addCustomer({name: "vignesh", customerID: 1234}));
    }

    const updateredux = () => {
      despatch(updateCustomer({name: "vignesh", customerID: 667878}));
    }

    const deleteredux = () => {
      despatch(removeCustomer({name:"vignesh", customerID: 667878}))
    }


    return(
        <>
        <label for="name">Enter your name here:</label>
        <input type="text" id="name" name="name" placeholder="Enter Text here"></input>
        <button onClick={sendtoredux}>submit</button>
         <button onClick={updateredux}>update</button>
          <button onClick={deleteredux}>delete</button>
        </>
    );
}

export default AboutPage;
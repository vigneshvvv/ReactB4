import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginContext } from "./loginContext";
import { useDispatch } from "react-redux";
import { addCustomer } from "./redux/customerSlice";



function InputComponents(){

    const[data, setData] = useState();
    const navigate = useNavigate();
 const { setLoginUser } = useContext(loginContext);

    const userDetails = [{
        username: "vignesh",
        password: "vignesh"
        },
        {
            username: "vignesh",
            password: "kumar"
        }
]

    useEffect(() => {
        return () => {
            console.log(data);
        }
    }, [])

    const submitHandle = (e) =>{
        e.preventDefault();
       const formData = new FormData(e.target);
       const output = Object.fromEntries(formData.entries());
       console.log(output);
       const {username, password} = output;
       const result  = userDetails.find((e1) => e1.username === output.username && e1.password === output.password);
       setLoginUser(result);
       if(typeof result !== "undefined"){
        console.log("login successfull");
       navigate("/home");
       }

    }

    const despatch = useDispatch();


    const sendtoredux = () => {
      despatch(addCustomer("the values added"));
    }

 

    return(
        
    // <form > 
    // {/* <input type="text" placeholder="Enter any text" onChange={(e) => setData(e.target.value)}></input> */}
    // <label for= "username">username:</label>
    // <input type="text" id="username" placeholder="Enter your username" name="username"></input><br/>
    //  <label for= "passowrd"> Password:</label>
    // <input type="text" id="password" placeholder="Enter your password " name="password"></input><br/>
    // <button type="submit">Login</button>
    // </form>

    <form onSubmit={submitHandle}>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Username</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" name="username"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" name="password"/>
    </div>
  </div>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0"></legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>        <label class="form-check-label" for="gridRadios1">
          Remember Me
        </label>
      </div>
    </div>
  </fieldset>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>

    );
}

export default InputComponents;
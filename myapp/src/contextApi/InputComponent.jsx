import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LoginContext from "./loginContext";

function InputComponent(){

     const users = [{
        username: "vignesh",
        password: "vignesh"
     },
    {
          username: "kumar",
        password: "kumar" 
    }
    
    ]   

    const navigate = useNavigate();
    const {setLoginUser} = useContext(LoginContext);

    const[passwordOne, setPasswordOne] = useState("");
    const[passwordTwo, setPasswordTwo] = useState("");
    const [match, setMatch] = useState(false);
    const[buttonState, setButtonState] = useState(true)

    function handlePasswordOne(event){
      setPasswordOne(event.target.value);
      console.log(passwordOne);
    }

    const handlePasswordTwo = (event) => {
      setPasswordTwo(event.target.value);
      console.log(passwordTwo);      
    }

    const handleRadioButton = (event) => {
      console.log(event)
      if(passwordOne === passwordTwo){
        console.log("matching")
        setMatch(false);
        setButtonState(false)
        console.log(match)

      }else{
        setMatch(true)
        console.log("not matching")
      }

    }

    const submitHandle = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const entry = Object.fromEntries(formData.entries())
        const result = users.find((e) => e.username === entry.username && e.password === entry.password);
        console.log("Result from input component", result)
        setLoginUser(result);
        if(result !== "undefined"){
            console.log("login successful")
            
        }
        navigate("/home");
            
    }


    return(
        <>
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
      <input type="password" value={passwordOne} onChange={handlePasswordOne} class="form-control" id="inputPassword3" name="password"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword4" class="col-sm-2 col-form-label">Re-EnterPassword</label>
    <div class="col-sm-10">
      <input type="password" value={passwordTwo} onChange={handlePasswordTwo} class="form-control" id="inputPassword4" name="password"/>
    </div>
  </div>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0"></legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" onChange={handleRadioButton} value="option1"/>        
        <label class="form-check-label" for="gridRadios1">
          Remember Me
        </label>
      </div>
    </div>
    {match && <p>The passwords are not matching ! please enter again</p>}
  </fieldset>
  <button disabled={buttonState} type="submit"  class="btn btn-primary">Sign in</button>
</form>
        </>
    );
}

export default InputComponent

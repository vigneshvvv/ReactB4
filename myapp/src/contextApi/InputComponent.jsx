import { useContext } from "react";
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
        </>
    );
}

export default InputComponent
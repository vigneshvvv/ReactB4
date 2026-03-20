import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ParantComponent from "./ParantComponent";
import ChildComponent from "./ChildComponent";
import UserDataService from "../apiCall/UserDataService";
import InputComponent from "../contextApi/InputComponent";
import { useState } from "react";
import LoginContext from "../contextApi/loginContext";

function RouterComponent(){
  const [loginUser, setLoginUser] = useState({})

    return (<>
    <LoginContext.Provider value={{loginUser, setLoginUser}}>
              <BrowserRouter>
        {/* older method without bootstrap */}
            {/* <ul>
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"/About"}>About</Link></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/careers">Careers</a></li>
            </ul> */}

            {/* with bootstrap */}
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/home"}>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/About"}>About</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
            <Routes>
                <Route path="/home" element={<ParantComponent/>}></Route>
                <Route path="/About" element={<InputComponent/>}/>
            </Routes>
        </BrowserRouter>
        </LoginContext.Provider>

    </>);
}

export default RouterComponent;
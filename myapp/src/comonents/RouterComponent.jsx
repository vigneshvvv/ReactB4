import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import InputComponents from './InputComponents';
import TableComponent from './TableComponent/TableComponent';
import HomePage from '../HomePage';
import { createContext, useState } from 'react';
import { loginContext } from './loginContext';
import NotFoundPage from './404Page/NotFound';

function  RouterComponent(){
     const[loginUser, setLoginUser] = useState({});
    return(
        <>
      
         <loginContext.Provider value={{ loginUser, setLoginUser }}>
        <BrowserRouter>
            {/* <ul>
                <li><Link to="/home">Home</Link></li>
                <li><a href='/contact'>Contact</a></li>
                <li><a href='/About'>About</a></li>
                <li><a href='/tableContent'>Admin Page</a></li>
            </ul> */}

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
             <div class="container-fluid">
    <a class="navbar-brand" href="#">MyApp</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login">LOGIN</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/admin">Admin</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

             
            <Routes>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/admin' element={<TableComponent/>}/>
                <Route path='/login' element={<InputComponents/>}/>
                <Route path='/404' element={<NotFoundPage/>}/>
            </Routes>
        
        </BrowserRouter>
            </loginContext.Provider>
        </>
    );
}

export default RouterComponent;
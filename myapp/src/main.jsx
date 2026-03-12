import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx'
import ParantComponent from './porps/ParantComponent.jsx';
import AxiosSample from './Axios/AxiosSample.jsx';
import UseRefExample from './useRef/UseRefExample.jsx';
import TableComponent from './comonents/TableComponent/TableComponent.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <ParantComponent/> */}
    {/* <AxiosSample/> */}
    {/* <UseRefExample/> */}
    {/* <TableComponent/> */}
  </StrictMode>,
)

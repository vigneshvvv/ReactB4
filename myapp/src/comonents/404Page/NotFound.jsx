import { useLocation } from "react-router-dom";


function NotFoundPage(){
    const location = useLocation();
    const errorMessage = location.state?.error || "Unknown Error";
    return(<>
    <h1>{errorMessage}</h1>
    </>);
}

export default NotFoundPage;
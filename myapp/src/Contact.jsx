import { useState } from "react";
import { useSelector } from "react-redux";

function Contact({contact, usage, userData}){

    // let {contact, usage} = props;
    const [customerDetail, setCustomerDetail] = useState({});
    // const {name, customerID} = customerDetail;


    
    let name = "";
    let customerId = "";
    const customerDetails = useSelector((state) => state.customer);
    if(customerDetails[0] !== undefined){
      const customer = customerDetails[0];
      name = customer.name;
    }

     const setcustomerValue = () => {
    // setCustomerDetail( customerDetails[0]);
    // console.log(customer);
        // setCustomerDetail(customer);
    } 
    
    

   
    return(
        <>
        <h1>Hi welcome {name}</h1>
        <button onClick={setcustomerValue}>load data</button>
        {/* <h1>{contact}</h1>
        <h1>{usage}</h1>
        <table>
            <tr>
            <th>S.NO</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>EmailID</th>
            </tr>
            <tr>
                <td>{userData.sno}</td>
                <td>{userData.FirstName}</td>
                <td>{userData.lastName}</td>
                <td>{userData.email}</td>
            </tr>
        </table> */}
        </>
    );
}

export default Contact;
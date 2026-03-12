import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TableComponent(){
    const[users, setUsers] = useState([]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState();
    const [deleteUserPoup, setDeleteUserPopup] = useState(false);
   const navigation = useNavigate();
  class ServiceUnavailable {
    constructor(message, name, status){
      this.message = message;
      this.name = name;
      this.status = status;
    }
  }


    
    useEffect(() => {
    
      try{

      
          let userFetched = fetch("https://dummyjson.com/users")
          .then((e) => e.json()).then((e1) => e1.users)
          .then(data => setUsers(data))
        console.log(userFetched);
      } catch(error){
        throw new ServiceUnavailable("The service was not available", "Exception", 404);
      }
    },[])

    const changeVivsiblity = (user) => {
        console.log(user);
        setSelectedUser(user);
        setPopupVisible(true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPopupVisible(false);
        console.log(selectedUser);
        const response = await fetch("https://dummyjson.com/users", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(selectedUser)
        });

        if(!response.ok){
          console.log("ERROR occured");
        }

        return await response.json();

    }

    const deletePopup = () => {
      setDeleteUserPopup(false);
    }

   

    const fetchData = async () => {
        try{

      //  throw new  ServiceUnavailable("The service was not available", "Exception", 404);
          let userFetched = await fetch("https://dummjson.com/users");
          // .then((e) => e.json()).then((e1) => e1.users)
          // .then(data => setUsers(data))
        console.log(userFetched);
      } catch(err){
        console.log(err.message);
        navigation("/404", {state: {error: err.message}});
        // throw new ServiceUnavailable(err.message, "Exception", 404);

      }
    }

    fetchData();



    return(<>
   
    <table class="table table-dark table-hover">
        <thead>
        <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>EmailID</th>
            <th>Mobile No</th>
            <th>Options</th>
        </tr>
</thead>
  <tbody>
    {users.map(user => (
        <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                   <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" class="btn btn-danger" onClick={() => setDeleteUserPopup(true)}>Delete</button>
                        <button type="button" class="btn btn-warning" onClick={() => changeVivsiblity(user)}>Edit</button>
                    </div>
                </td>
            </tr>
    ))}
</tbody>
    </table> 

  {popupVisible && (
          <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleSubmit}>
                <div className="modal-header">
                  <h5 className="modal-title">Add User</h5>
                  <button type="button" className="btn-close" onClick={() => setPopupVisible(false)}></button>
                </div>
                <div className="modal-body">
                  <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={selectedUser.firstName}
                    onChange={(user) => setSelectedUser({...selectedUser, firstName: user.target.value})}
                  />
                  <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={selectedUser.lastName}
                    onChange={(e) => setSelectedUser({...selectedUser, lastName: e.target.value})}
                  />
                  <input
                    className="form-control mb-2"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={selectedUser.email}
                    onChange={(e) => setSelectedUser({...selectedUser, email: e.target.value})}
                  />
                  <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={selectedUser.phone}
                    onChange={(e) => setSelectedUser({...selectedUser, phone: e.target.value})}
                  />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setPopupVisible(false)} >Close</button>
                  <button type="submit" className="btn btn-primary">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        )}
      {deleteUserPoup && (
         <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleSubmit}>
                <div className="modal-header">
                  <h5 className="modal-title">Delete User</h5>
                  <button type="button" className="btn-close" onClick={() => setDeleteUserPopup(false)}></button>
                </div>
                <div className="modal-body">
                <h5>Are you Sure? you want to delete this?</h5>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setDeleteUserPopup(false)} >Close</button>
                  <button type="submit" className="btn btn-primary">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      )}

    
    </>);
}

export default TableComponent;
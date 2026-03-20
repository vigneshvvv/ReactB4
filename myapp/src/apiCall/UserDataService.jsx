import { useEffect, useState } from "react";

function UserDataService(){
    const[userData, setUserData] = useState([]);

    useEffect(() => {
        // const data =  () => {
        //     fetch("https://dummyjson.com/users").then((user) => user.json()).then((u) => console.log(u))
        //    .then((userNew) => setUserData(userNew))
        //     .then((e1) => console.log(e1))
        //     .catch((error) => console.log(error))
         
        // }

        //  const data =  
        //     fetch("https://dummyjson.com/users").then((user) => user.json()).then((u) => console.log(u))
        //    .then((userNew) => setUserData(userNew))
        //     .then((e1) => console.log(e1))
        //     .catch((error) => console.log(error))
         
        const data = async () => {
            const userData = await fetch("https://dummyjson.com/users");
            console.log(userData)
            const result = await userData.json();
            const data = await result.users;
            console.log("the userData", data)
            setUserData(data)
        }
          data()
    },[])

    return(<>
    <table class="table table-hover">
        <thead>
            <tr>
                <th>id</th>
                <th>firstName</th>
                <th>lastName</th>
                <th>age</th>
            </tr>
        </thead>
        <tbody>
            {userData.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.age}</td>
                </tr>
            ))
            }
        </tbody>
    </table>
    </>);
}

export default UserDataService;
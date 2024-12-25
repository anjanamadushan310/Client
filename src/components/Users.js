import React, { useState , useEffect } from 'react'
import axios from 'axios';
import User from './User';


const URL = "http://localhost:5000/users";

const fetchHandler = async () =>{
    return await axios.get(URL).then((res) => res.data);
};



export default function Users() {

    const [users, setUsers] = useState();
    useEffect(() => {
        fetchHandler().then((data) => setUsers(data.users));
    },[])

    
  
  return (
    <div><h1>list j </h1>
    <div>
      
     
      {users && users.map((user, i) => (
        <div key ={i}>
            <User user={user}/>

        </div>   
       

      ))}
       
    </div>
    </div>
  )
}

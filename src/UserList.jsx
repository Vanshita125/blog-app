import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
const UserList = () => {
    const[userData,setUserData]=useState([]);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
      getUsersData();
    }, [])
    
    async function getUsersData(){
        const url="http://localhost:3000/users"
        let response=await fetch(url);
        response=await response.json();
        setUserData(response);
        setLoading(false);
    }
    async function deleteUser(id){
        const url="http://localhost:3000/users/"+id;
        let response=await fetch(url,{
            method:'Delete'
        });
        response=await response.json();
        getUsersData();
    }
    async function handleEdit(id){
     navigate("/edit/"+id);
  }
  return (
    <div>
      <h1>UserList</h1>
       {!loading? userData.map((user)=>(
          <ul>
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.email}</li>
            <button className='border border-black' onClick={()=>deleteUser(user.id)}>Delete</button>
            <button className='border border-black' onClick={()=>handleEdit(user.id)}>Edit</button>
          </ul>
       )):<h1>Loading...</h1>}
    </div>
  )
}

export default UserList

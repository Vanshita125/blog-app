import React, { useEffect,useState } from 'react'
import { useNavigate, useParams} from 'react-router';

const UserEdit = () => {
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();


    useEffect(() => {
      getUserData();

    }, [])

    async function editUserData(){
       const url="http://localhost:3000/users/"+id;
       let response =await fetch(url,{
        method:'Put',
        body:JSON.stringify({name,age,email})
       }
       );
       response = await response.json();
       navigate("/list");
    }

    async function getUserData(){
        const url="http://localhost:3000/users/"+id;
       let response =await fetch(url);
       response = await response.json();
       setName(response.name);
       setAge(response.age);
       setEmail(response.email);
    }
    
  return (
    <div>
      <h1>UserEdit</h1>
      <input type='text' value={name} onChange={(event)=>setName(event.target.value)} placeholder='enter name'/>
      <input type='text' value={age} onChange={(event)=>setAge(event.target.value)} placeholder='enter age'/>
      <input type='text' value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='enter email'/>
      <button onClick={editUserData}>Edit User</button>
    </div>
  )
}

export default UserEdit

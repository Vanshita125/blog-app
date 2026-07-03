import React, { useState } from 'react'

const UserAdd = () => {
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");
     async function sendUserData(){
        const url="http://localhost:3000/users";
        let response= await fetch(url,{
            method:'Post',
            body:JSON.stringify({name,age,email})
        });
        response=await response.json();
      }
  return (
    <div>
      <h1>UserAdd</h1>
      <input type='text' value={name} onChange={(event)=>setName(event.target.value)} placeholder='enter name'/>
      <input type='text' value={age} onChange={(event)=>setAge(event.target.value)} placeholder='enter age'/>
      <input type='text' value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='enter email'/>
      <button onClick={sendUserData}>Add User</button>
      
    </div>
  )
}

export default UserAdd

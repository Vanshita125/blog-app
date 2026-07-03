import React, { useState } from 'react'
import './index.css'
const ValidInput = () => {
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [nameErr,setNameErr] = useState("");
    const [passErr,setPassErr] = useState("");
    function handleName(e){
      if(e.target.value.length>5){
        setNameErr("Only 5 characters allowed");
       }
       else{
        setNameErr("");
       }
    }
    function handlePassword(e){
       let regex = /^[A-Z0-9]+$/i;
       if(regex.test(e.target.value)){
        setPassErr("");
       }
       else{
        setPassErr("Only Numbers and Alphabets are allowed");
       }
    }
  return (
    <div className='flex flex-col items-center gap-5'>
      <input className={nameErr?'error' : ''} type='text'  placeholder='Name' onChange={handleName} />
      <span className='red-col'>{nameErr && nameErr}</span>
      <input className={passErr?'error' : ''} type='password' placeholder='Password' onChange={handlePassword}/>
      <span className='red-col'>{passErr && passErr}</span>
     <button
  disabled={nameErr !== "" || passErr !== ""}
  className="
    bg-orange-500
    text-white
    p-3
    rounded-xl
    disabled:bg-gray-400
    disabled:cursor-not-allowed
  "
>
  Login
</button>
    </div>
  )
}

export default ValidInput

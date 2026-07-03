import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import './index.css'
import authService from './appwrite/auth'
import {Login,Logout} from './redux/authSlice'
import { Outlet } from 'react-router';
import { Header, Footer } from "./Comp";
const App = () => {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();
   useEffect(() => {
     authService.getCurrentUser()
     .then((userData)=>{
      if(userData){
         dispatch(Login({userData}))
      }
      else{
        console.log("logout");
        dispatch(Logout())
      }
     })
     .finally(()=>setLoading(false))
   }, [])
   
  return !loading ? (<div>
    <Header/>
    <main><Outlet/></main>
    <Footer/>
  </div>):null
}

export default App

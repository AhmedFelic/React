import React from 'react'
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth"


function Home() {


  const navigate = useNavigate();
const signOut = () =>{
  auth.signOut();
  navigate("/")
}


  return (
    <>
    <div>Home</div>
    <button onClick={()=>{signOut()}}>Sign Out</button>
    </>
  )
}
// FIXATI BUG KAD KLIKNEM ENTER NECE DA LOGUJE VEC POJAVI DRUGI FORM!
export default Home
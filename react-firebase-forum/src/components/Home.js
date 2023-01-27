import React from 'react'
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth"
import Nav from './Nav';

function Home() {


  const navigate = useNavigate();
  const signOut = () => {
    auth.signOut();
    navigate("/")
  }


  return (
    <>
      <Nav />
      <div className='home-container'>
        <div>Home</div>
        <button onClick={() => { signOut() }}>Sign Out</button>
      </div>
    </>
  )
}

export default Home
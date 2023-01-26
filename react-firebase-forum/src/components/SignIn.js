import React, { useState } from 'react'
import "./style.css"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [isShown, setIsShown] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailSingUp, setEmailSingUp] = useState("");
  const [usernameSingUp, setUsernameSingUp] = useState("");
  const [passwordSingUp, setPasswordSingUp] = useState("");
  const [sucSignup, setSucSignup] = useState("");

  const navigate = useNavigate()

  const showRegister = event => {
    setIsShown(current => !current);
    event.preventDefault();
  }

  const signUp = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, emailSingUp, passwordSingUp, usernameSingUp)
      .then((userCredential) => {
        console.log(userCredential);
        setSucSignup("Successfull SignUp!")
      }).catch((error) => {
        console.log(error)
      })
  }
  const signIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCrd) => {
        navigate("./home")
        console.log(userCrd)
      }).catch((err) => {
        console.log(err)
      })
  }


  return (
    <>
      <div className='main-container'>
        <form onSubmit={signIn}>
          <div className='signin-container'>
            <div className='fix'></div>
            <h2 className='title-input'>Sign In</h2>
            <label className='input-mail-user-container'>Email</label> <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <label className='input-password-container'>Password</label> <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={showRegister} className='register-btn'>Dont have an account? Register now!</button>
            <button className="signup-button" type="submit">Sign In</button>
          </div>
        </form>
        <form onSubmit={signUp}>
          {isShown ? <div id='Register' className='signup-container'>
            <div className='fix'></div>
            <h2 className='title-input'>Register</h2>
            <label className='input-mail-container'>Email</label> <input type="email" value={emailSingUp} onChange={(e) => setEmailSingUp(e.target.value)} />
            <label className='input-user-container'>Username</label> <input type="text" value={usernameSingUp} onChange={(e) => setUsernameSingUp(e.target.value)} />
            <label className='input-password-container'>Password</label> <input type="password" value={passwordSingUp} onChange={(e) => setPasswordSingUp(e.target.value)} />
            <button className="signup-button" type="submit">Sign Up</button>

          </div> : null}
        </form>
      </div>
    </>
  )
}

export default SignIn
import React, { useState } from 'react'
import "./style.css"
function SignIn() {
  const [isShown, setIsShown] = useState(false);

 const showRegister = event =>{
  setIsShown(current => !current);
   event.preventDefault();
 }
 

  return (
    <>
      <div className='main-container'>
        <form>
          <div className='signin-container'>
            <div className='fix'></div>
            <h2 className='title-input'>Sign In</h2>
            <label className='input-mail-user-container'>Email or Username</label> <input type="text" />
            <label className='input-password-container'>Password</label> <input type="password" />
            <button onClick={showRegister} className='register-btn'>Dont have an account? Register now!</button>
          </div>
          {isShown ? <div id='Register' className='signup-container'>
            <div className='fix'></div>
            <h2 className='title-input'>Register</h2>
            <label className='input-mail-container'>Email</label> <input type="text" />
            <label className='input-user-container'>Username</label> <input type="text" />
            <label className='input-password-container'>Password</label> <input type="password" />

          </div> : null}
        </form>
      </div>
    </>
  )
}

export default SignIn
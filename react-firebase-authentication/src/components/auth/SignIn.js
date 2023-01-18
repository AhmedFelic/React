import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
const SignIn = () => {
   
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("")
   const signIn = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential)
      
        
    }).catch((error) =>{
        console.log(error)
        var errorCode = error.code;
        if (errorCode ==='auth/wrong-password'){
            console.log('Wrong password');
            setErrorMessage("Wrong Password")
           }
    })

   }
    return (
        <div className="sign-in-container">
            <form onSubmit={signIn}>
                <h1>Log In</h1>
                <input type="email" placeholder="Email.." value={email} onChange={(e)=>setEmail(e.target.value)}>
                </input>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}>
                </input>
            <button type="submit">Log In</button>
            
            </form>
        {errorMessage ? <p style={{color: "red"}}>{errorMessage}</p> : <p></p>}
        </div>
    )
}
export default SignIn
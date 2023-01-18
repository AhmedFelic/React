import React from "react";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";

const SignUp = () => {
   
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
   const signUn = (e) =>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential)

    }).catch((error) =>{
        console.log(error)
    })

   }
    return (
        <div className="sign-in-container">
            <form onSubmit={signUn}>
                <h1>Sign Up For Account</h1>
                <input type="email" placeholder="Email.." value={email} onChange={(e)=>setEmail(e.target.value)}>
                </input>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}>
                </input>
            <button type="submit">Sign Up</button>

            </form>

        </div>
    )
}
export default SignUp
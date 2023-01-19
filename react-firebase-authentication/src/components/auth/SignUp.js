import React from "react";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
   
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [sucessfullSignUp, setSucessfullSignUp] = useState("")
   const signUn = (e) =>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //  navigate("./home")
        console.log(userCredential)
        setSucessfullSignUp("Successfull SignUp!")
        
    }).catch((error) =>{
        var errorCode = error.code;
        console.log(error)
        
    })

   }
    return (
        <>
        <div className="sign-up-container">
            <form onSubmit={signUn}>
                <h2 className="signup-title" >SignUp</h2>
                <input className="signup-input-email"  type="email" placeholder="Email.." value={email} onChange={(e)=>setEmail(e.target.value)}>
                </input>
                <input className="signup-input-password"  type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}>
                </input>
            <button className="signup-button"  type="submit">Sign Up</button>

            </form>
           

        </div>
        {sucessfullSignUp && <p className="signup-message">Sucessfull SignUp! Please Log In with your new information to continiue</p>}
        </>
    )
}
export default SignUp
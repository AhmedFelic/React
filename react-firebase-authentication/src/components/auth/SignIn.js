import React from "react";
import { useState } from "react";
import SignUp from "./SignUp";
import "./auth.css"

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
const SignIn = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("")
    const signIn = (e) => {

        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate("./home")
                console.log(userCredential)


            }).catch((error) => {
                console.log(error)
                var errorCode = error.code;
                if (errorCode === 'auth/wrong-password') {
                    console.log('Wrong password');
                    setErrorMessage("Wrong Password")
                }
                if (errorCode == "auth/invalid-email" || errorCode == "auth/internal-error") {
                    console.log("please check if all the fields are filled out correctly")
                }
            })

    }
    return (
        <>
       
            <div className="align">
                <div className="sign-in-container">
                    <form onSubmit={signIn}>
                        <h1 className="title-login">LogIn</h1>
                        <input className="signin-input-email" type="email" placeholder="Email.." value={email} onChange={(e) => setEmail(e.target.value)}>
                        </input>
                        <input className="signin-input-password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}>
                        </input>
                        <button className="signin-button" type="submit">Log In</button>

                    </form>
                    {errorMessage ? <p style={{ color: "red" }}>{errorMessage}</p> : <p></p>}


                </div>
                <div className="signUp-container">
                    <SignUp />
                </div>
            </div>
        </>

    )
}
export default SignIn
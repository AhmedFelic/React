import React, { useState } from "react";
import { useEffect } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthDetails = () =>{
    const [authUser, setAuthUser] = useState(null)
    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user)=>{
            if (user){
                setAuthUser(user)
                
            }else{
                setAuthUser(null)
            }
        })
        return () =>{
            listen();
        }
    },[])

    const userSignOut = () =>{
        signOut(auth).then(()=>{
            console.log("Sign out sucessfull")   
        }).catch(err =>{
            console.log(err)
        })
    }

    return(
      
         
        <div> { authUser ?  <span><p style={{color: "blue"}}>{`Signed In as ${authUser.email}`}</p> <button onClick={userSignOut}>Sign Out</button></span> : <p>Signed Out</p>}</div>
            
        
    )
}
export default AuthDetails
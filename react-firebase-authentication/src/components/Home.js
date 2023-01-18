import React from "react"
import {useAuthState} from "react-firebase-hooks/auth"  // info o logovanom useru se nalazi u ovom
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom";
function Home(){
    const navigate = useNavigate();
    const signOutClick = () =>{
        auth.signOut(); 
        navigate("/");
    }
    const [user, loading, error] = useAuthState(auth);
    return(
        <div>

            <p>Welcome to Homepage {user?.email}</p>
            <button onClick={()=> signOutClick()}>Sign Out</button>  {/*Funkcija ovdje ce sama rijesiti sign out koje se povlaci iz autha */}
        </div>
    )
}
export default Home
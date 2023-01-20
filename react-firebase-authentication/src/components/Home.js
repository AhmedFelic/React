import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"  // info o logovanom useru se nalazi u ovom
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom";
import Chat from "./Chat";
import "./chat.css"
function Home() {
    const navigate = useNavigate();
    const signOutClick = () => {
        auth.signOut();
        navigate("/");
    }
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            
            <span className="title-chat">
              
            <p>Welcome to group Chat {user?.email}</p>
            </span>
            <Chat />
            <span className="btn-signout-container">
                <button className="sing-out-btn" onClick={() => signOutClick()}>Sign Out</button>  {/*Funkcija ovdje ce sama rijesiti sign out koje se povlaci iz autha */}
            </span>
        </div>
    )
}
export default Home
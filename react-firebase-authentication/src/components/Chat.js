import React from 'react'
import { useState, useEffect } from 'react'
import {db, auth} from "../firebase"
import {useAuthState} from "react-firebase-hooks/auth" 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function Chat() {
    const [messages, setMessages] = useState([])
    const [msg, setMsg] = useState("")
    const [user, loading, error] = useAuthState(auth);
    useEffect(()=>{
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        }) // stavice poruke po redu, najnovija na dnu, 50 limit   
    }, [])
  
    async function sendMessage(e){
        e.preventDefault()
        const {email} = auth.currentUser;
        await db.collection("messages").add({
            text: msg,
            email: email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg("")
    }
  
    return (
        <>
    <div>Chat</div>
    {messages.map((messages, id, text, email) => (
          <div key={id} >
            <p>{messages?.text}</p>
            
          </div>
        ))}
    <div>
            <form onSubmit={sendMessage}>
                <input value={msg} onChange={(e) => setMsg(e.target.value) } />
                <button type='submit'>Send</button>
            </form>
        </div>
    </>
  )
}

export default Chat
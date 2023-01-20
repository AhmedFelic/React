import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { db, auth } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "./chat.css"

function Chat() {
    const [messages, setMessages] = useState([])
    const [msg, setMsg] = useState("")
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        }) // stavice poruke po redu, najnovija na dnu, 50 limit   
    }, [])
    const dummy = useRef()
    async function sendMessage(e) {
        e.preventDefault()
        const { email } = auth.currentUser;
        await db.collection("messages").add({
            text: msg,
            email: email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg("")
        dummy.current.scrollIntoView({behavior:"smooth"})
    }

    return (
        <>
            <div className='chat-container'>
                {messages.map((messages, id, text, email) => (
                    <div className='chat-txt' key={id} >
                        <p className='text-messages'>{messages?.text}</p>

                    </div>
                ))}
                <div ref={dummy}></div>
                <div className='input-msg-container'>
                    <form onSubmit={sendMessage}>
                        <input className='input-msg' placeholder='Your message...' value={msg} onChange={(e) => setMsg(e.target.value)} />
                        <button className='send-btn' type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Chat
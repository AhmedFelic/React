import React from 'react'
import Nav from './Nav'
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"
function Question() {

  const navigate = useNavigate();
  const signOut = () => {
    auth.signOut();
    navigate("/")
  }

  return (
    <>
      <Nav />
      <div className='question-container'>

        <h4 className='title-home'>Ask a question!</h4>
        <div className="question-input-container">
          <p>Ask a question for a new topic!</p>
          <form>
            <input type="text" placeholder="Topic" className='input-question' />
            <p>Your question: </p>
            <textarea placeholder='Question' className='input-question inputQuestion' name="text" wrap="soft"> </textarea>
          </form>
        </div>

        <button className='sing-out-btn' onClick={() => { signOut() }}>Sign Out</button>
      </div>
    </>
  )
}

export default Question
import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
function Nav() {
    return (
        <>
            <div className='nav-contanier'>
                <h2 className='forum-title'>Q&A Forum</h2>
                <span className='nav-link-conatnier'>
                    <Link className='question-link' to={"/home"}>Questions</Link>
                    <Link className='ask-link' to={"/ask"}>Ask Question</Link>
                </span>
            </div>
        </>
    )
}

export default Nav
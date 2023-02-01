import React from 'react'
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth"
import Nav from './Nav';

function Home() {


  const navigate = useNavigate();
  const signOut = () => {
    auth.signOut();
    navigate("/")
  }


  return (
    <>
      <Nav />
      <div className='home-container'>

        <h4 className='title-home'>Ask a question!</h4>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th className='th-forums'>Forums</th>
                <th className='th-topics'>Topics</th>
                <th className='th-posts'>Posts</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tr  className='tr-table'>
              <td className='th-forums'>News</td>
              <td>2</td>
              <td>3</td>
              <td>2 days ago</td>
            </tr>
            <tr  className='tr-table'>
              <td className='th-forums'>Sports</td>
              <td>5</td>
              <td>7</td>
              <td>1 days ago</td>
            </tr>
          </table>

        </div>

        <button onClick={() => { signOut() }}>Sign Out</button>
      </div>
    </>
  )
}

export default Home
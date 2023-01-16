import React, { useState } from "react"

import { useNavigate } from "react-router-dom"

import Nav from "./Nav"
import { useEffect } from "react"
import "../index.css"

import { useParams } from "react-router-dom"
function BookInfo() {
    const {id} = useParams()
   const url = "https://example-data.draftbit.com/books/"

    const [bookData, setBookData] = useState([])
   
    const getData = async () =>{
        const response = await fetch(
           `${url}/${id}`
        ).then((response) => response.json())
        .catch(err =>console.log(err))
        setBookData(response)
        
    }


useEffect(()=>{
  getData()
},[id]);

const navigate = useNavigate();

    return (
        <>
            <Nav />
         
            <div className="info-container">
            

                <div className="info-content-container" >
                <button class="button-60" role="button" onClick={() => navigate(`/`)}>Back To List</button>
                    <img className="info-content-image " src={bookData.image_url} />
                    <p className="info-book-title margin" ><span className="names">Title: </span>  {bookData.title}</p>
                    <p className="info-book-release margin"><span className="names">Author:</span> {bookData.authors} </p>
                    <p className="info-book-rating margin"><span className="names">Rating:</span> {bookData.rating}</p>
                    <p className="info-book-genre margin"><span className="names">Genre:</span> {bookData.genres}</p>
                    <p className="info-book-quote margin"><span className="names">Quote:</span> {bookData.Quote1}</p>
                    <p className="info-book-about"><span className="names">About:</span> {bookData.description} </p>
                </div>
                  
            </div>

        </>
    )
}
export default BookInfo
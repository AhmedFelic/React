import React, { useState } from "react"
import { ReactDOM } from "react"
import Nav from "./Nav"
import { useEffect } from "react"

function BookList() {
//AIzaSyDJpWPOk-cDe3qjK3Ksnn9TFlUm1vIh9wc
    const [bookData, setBookData] = useState()
    const [search, setSearch] = useState()
    const getData = async () =>{
        const response = await fetch(
            "https://example-data.draftbit.com/books?_limit=50"
        ).then((response) => response.json())
        .catch(err =>console.log(err))
        setBookData(response)
        console.log(response)
    }


useEffect(()=>{
  getData()
},[]);





    return (
        <>
            <Nav />
            <div className="books-main">
                <div className="books-container">
                    <img className="book-image" src="#"></img>
                    <p className="book-title">Title: </p>
                    <p className="book-rating">Rating</p>
                    <a className="book-info" href="">Info</a>
                </div>
                
            </div>

        </>
    )
}
export default BookList
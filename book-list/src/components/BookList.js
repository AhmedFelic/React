import React from "react"
import { ReactDOM } from "react"
import Nav from "./Nav"

function BookList() {
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
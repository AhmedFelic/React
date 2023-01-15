import React, { useState } from "react"
import { ReactDOM } from "react"
import Nav from "./Nav"
import { useEffect } from "react"

import { useNavigate } from "react-router-dom"

function BookList() {

    const [bookData, setBookData] = useState([])
    const [searchTitle, setSearchTitle] = useState("")

    const navigate = useNavigate();

    const getData = async () => {
        const response = await fetch(
            "https://example-data.draftbit.com/books?_limit=30"
        ).then((response) => response.json())
            .catch(err => console.log(err))
        setBookData(response)
        console.log(response)
    }


    useEffect(() => {
        getData()
    }, []);



    return (
        <>
            <Nav />
            <div className="books-main">
                <span className="book-input-parent">
                <input className="book-input" placeholder="Enter book name... " onChange={(e) => setSearchTitle(e.target.value)}></input>
                </span>
                {
                    bookData.filter((value) => {
                        if (searchTitle === " ") {
                            return value;
                        } else if (
                            value.title.toLowerCase().includes(searchTitle.toLowerCase())) {
                            return value;
                        }

                    })
                        .map((book) => (
                            <div className="books-container" key={book.id}>

                                <img className="book-image" src={book.image_url}></img>

                                <p className="book-title" title={book.title}>{book.title}  </p>
                                <p className="book-author">{book.authors}</p>
                                <p className="book-rating">Rating: {book.rating}</p>
                                <p className="book-info" onClick={() => navigate(`/info/${book.id}`)}>Info</p>

                            </div>
                        ))}
            </div>

        </>
    )
}
export default BookList
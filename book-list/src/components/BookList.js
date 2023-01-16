import React, { useState } from "react"
import { ReactDOM } from "react"
import Nav from "./Nav"
import { useEffect } from "react"
import Pagination from "./Pagination"
import { useNavigate } from "react-router-dom"

function BookList() {

    const [bookData, setBookData] = useState([])
    const [searchTitle, setSearchTitle] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostPerPage] = useState(5)
    const navigate = useNavigate();
   
    const getData = async () => {
        const response = await fetch(
            "https://example-data.draftbit.com/books?_limit=50"
        ).then((response) => response.json())
            .catch(err => console.log(err))
        setBookData(response)
        console.log(response)
    }


    useEffect(() => {
        getData()
    }, []);
    const lastPostIndex = currentPage * postsPerPage;   // definisano, current page = 2, postPerPage = 5 = 10 zadnja.
    const firstPostIndex = lastPostIndex - postsPerPage; // zadnja - po str = 5
    const currentPosts = bookData.slice(firstPostIndex, lastPostIndex)
  
    

    return (
        <>
            <Nav />
          
            <div className="books-main">
                <span className="book-input-parent">
                <input className="book-input"  placeholder="Enter book name... " onChange={(e) => setSearchTitle(e.target.value)}></input>
                </span>
                <Pagination
                  totalPosts={bookData.length}
                  postsPerPage={postsPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
            />  <span className="pagination-number">{currentPage} - {bookData.length/postsPerPage}</span>
                {
                    currentPosts.filter((value) => {
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
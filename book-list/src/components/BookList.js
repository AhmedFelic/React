import React, { useState } from "react"
import { ReactDOM } from "react"
import Nav from "./Nav"
import { useEffect } from "react"
import Pagination from "./Pagination"
import { useNavigate } from "react-router-dom"

function BookList() {

    const [bookData, setBookData] = useState([])
    const [query, setQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostPerPage] = useState(5)
    const navigate = useNavigate();
   
    const getData = async () => {
        const response = await fetch(
            `https://example-data.draftbit.com/books?q=${query}&_limit=50`
        ).then((response) => response.json())
            .catch(err => console.log(err))
        setBookData(response)
        
    }

    useEffect(() => {
       if(query.length === 0 || query.length > 2)   getData()
      
    }, [query]);
    
    const lastPostIndex = currentPage * postsPerPage;   // definisano, current page = 2, postPerPage = 5 = 10 zadnja.
    const firstPostIndex = lastPostIndex - postsPerPage; // zadnja - po str = 5
    const currentPosts =  bookData.slice(firstPostIndex, lastPostIndex)
 
    return (
        <>
            <Nav />
          
            <div className="books-main">
                <span className="book-input-parent">
                <input className="book-input"  placeholder="Enter book name... " onChange={(e) => setQuery(e.target.value)}></input>
                </span>
                <Pagination
                  totalPosts={bookData.length}
                  postsPerPage={postsPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
            />  <span className="pagination-number">{currentPage} - {bookData.length/postsPerPage}</span>
                {
                    
                    currentPosts.map((book) => (
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
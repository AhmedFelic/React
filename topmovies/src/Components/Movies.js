import React from "react";
import Navbar from "./Navbar";
import "./style.css"
import { useEffect } from "react";
import { useState } from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500/"

// https://api.themoviedb.org/3/movie/popular?api_key=e31083594e6e4bcf348fe1275441add8

function Movies() {

    const [movies, setMovies] = useState([]);
    const [modal, setmodal] = useState(false);
    const [searchTitle, setSearchTitle] = useState("")
    const [singleMovie, setSingleMovie] = useState(null)

    const toggleModal = (singleMovie) => {
        setmodal(!modal)
        setSingleMovie(singleMovie)
    }

    const fetchMovies = () => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=e31083594e6e4bcf348fe1275441add8")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setMovies(data.results)
                console.log(data.results)
            })
    }
    useEffect(() => {
        fetchMovies()
        
    }, []);


    return (
        <>
            <Navbar />
            <div className="container-movies">
                <div className="search">
                    <p>Search Movies</p>
                    <input className="movie-input" onChange={(e) => setSearchTitle(e.target.value)}></input>
                </div>
                <div className="all-card-container">

                    {
                    movies.filter((value) =>{
                        if(searchTitle === ""){
                            return value
                        }else if(
                                value.title.toLowerCase().includes(searchTitle.toLowerCase()))
                                { 
                                    return value;
                                }
                    })
                        
                    .map((movie) => (

                        <div className="movie-card-container"  >
                            <p>{movie.title} </p>
                            <img className="poster-image" src={API_IMG + movie.poster_path} ></img>
                            <button onClick={() => toggleModal(movie)} className="info-button">Info</button>
                            <span className="movie-grade"> {movie.vote_average}</span>
                        </div>
                    ))}
                     
                </div>

            </div>
           
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal}  className="overlay">
                       
                            <div className="modal-content">
                                 <p className="modal-title">{singleMovie.title}</p>
                                 <img className="poster-image" src={API_IMG + singleMovie.poster_path} ></img>
                                <p >{singleMovie.overview}</p>
                                <button onClick={toggleModal}>Close</button>
                            </div>
                    </div>
                </div>
            )}

        </>
    )


}
export default Movies
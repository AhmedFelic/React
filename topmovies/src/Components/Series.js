import React from "react";
import Navbar from "./Navbar";
import "./style.css"
import { useState, useEffect } from "react"



function Series() {

    const [series, setSeries] = useState([]);
    const [searchTitle, setSearchTitle] = useState("")



    const API_IMG = "https://image.tmdb.org/t/p/w500/"
    
    
    const fetchSeries = () => {
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=e31083594e6e4bcf348fe1275441add8")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setSeries(data.results)
                console.log(data.results)
            })
    }
    useEffect(() => {
        fetchSeries()

    }, []);




    return (
        <>
            <Navbar />

            <div className="container-series">
                <div className="search">
                    <p>Search Series</p>
                    <input className="movie-input" onChange={(e) => setSearchTitle(e.target.value)}></input>
                </div>


                <div className="all-card-container">

                {
                    series.filter((value) =>{
                        if(searchTitle === ""){
                            return value
                        }else if(
                                value.name.toLowerCase().includes(searchTitle.toLowerCase()))
                                { 
                                    return value;
                                }
                    })
                         .map((serie) => (

                        <div className="movie-card-container"  >
                            <p>{serie.name}</p>
                            <img className="poster-image" src={API_IMG + serie.poster_path}></img>
                            <button className="info-button">Info</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Series
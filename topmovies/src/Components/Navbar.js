import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
function Navbar() {
    return (
        <div className="container-nav">
            <ul className="nav">
                <li><Link  className="link" to="/">Movies</Link></li>
                <li> <Link  className="link link-series"  to="/Series">Series</Link> </li>
            </ul>

        </div>
    )
}
export default Navbar
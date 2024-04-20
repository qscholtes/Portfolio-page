import React from "react";
import { Link } from "react-router-dom"; // Import Link component
import "./nav.css";

function NavBar() {
    return (
        <section className="nav-area">
            <nav className="fill">
                <ul>
                    <li><Link to="/">Home</Link></li> {/* Use Link component instead of anchor tag */}
                    <li><Link to="/about">Contact</Link></li> {/* Use Link component instead of anchor tag */}
                    {/* <li><Link to="/resume">Resume</Link></li> Use Link component instead of anchor tag */}
                </ul>
            </nav>
        </section>
    );
}

export default NavBar;
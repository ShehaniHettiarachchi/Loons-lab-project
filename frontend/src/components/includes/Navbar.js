import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div>
            <nav class="navbar navbar-dark static-top" style={{ backgroundColor: "#FFFFFF", fontFamily: "Abril Fatface", fontWeight: "bold" }}>
                <div class="container-fluid">
                    <img src="pharmacy_logo.jpg" alt="logo" style={{height: "50%", width: "20%"}}></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" style={{ backgroundColor: "#205E61"}} data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" style={{backgroundColor: "#205E61"}}>
                        <div class="offcanvas-header">
                            <button type="button" class="btn-close btn-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" class="nav-link active">About us</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link to="/contact" class="nav-link active">Contact us</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link to="/gallery" class="nav-link active">Gallery</Link>
                            </li>
                            <br/><br/>
                            <li class="nav-item dropdown">
                                <Link to="/login" class="nav-link active">Login</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link to="/signup" class="nav-link active">Sign up</Link>
                            </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
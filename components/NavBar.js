import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import { Nav } from "react-bootstrap";
import "./NavBar.css"



function NavBar(){
    return(
        <header className="main-header">
            <div className="main-top navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-top-inner">
                                <div className="main-top-left"></div>
                                <div className="main-top-logo">
                                    <img className="Campo-logo" src="./logo2.png" alt=""/> La boutique del Campo
                                </div>
                                <div className="main-top-right"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navBar navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Nav className="me-auto">
                                <Nav.Link href="#home" active>Home</Nav.Link>
                                <Nav.Link href="#features">About</Nav.Link>
                                <Nav.Link href="#pricing">Shop</Nav.Link>
                                <Nav.Link href="#pricing">Pages</Nav.Link>
                                <Nav.Link href="#pricing">Blog</Nav.Link>
                                <Nav.Link href="#pricing">Contact</Nav.Link>
                            </Nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar
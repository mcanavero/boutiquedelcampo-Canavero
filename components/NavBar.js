import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import CartWidget from "./CartWidget";
import { Col, Container, Nav, Row } from "react-bootstrap";
import "./NavBar.css";



function NavBar(){
    return(
        <header className="main-header">
            <div className="main-top navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Container>
                        <Row>
                            <Col xs={3}>
                                <div className="main-top-left">   
                                </div>
                            </Col>
                            <Col xs={6}>
                                <div className="main-top-logo">
                                    <img className="Campo-logo" src="./logo2.png" alt=""/> La boutique del Campo
                                </div>
                            </Col>
                            <Col xs={3}>
                                <div className="main-top-right">
                                    <CartWidget></CartWidget>
                                </div>
                            </Col>  
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="navBar navbar navbar-expand-lg navbar-light">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Nav className="me-auto">
                                <Nav.Link href="#home" active>Home</Nav.Link>
                                <Nav.Link href="#features">About</Nav.Link>
                                <Nav.Link href="#pricing">Shop</Nav.Link>
                                <Nav.Link href="#pricing">Pages</Nav.Link>
                                <Nav.Link href="#pricing">Blog</Nav.Link>
                                <Nav.Link href="#pricing">Contact</Nav.Link>
                            </Nav>
                        </Col>    
                    </Row>        
                </Container>       
            </div>
        </header>
    )
}

export default NavBar
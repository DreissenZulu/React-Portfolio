import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Landing() {
    return (
        <React.Fragment>
            <div className="App-header">
                <h4>I AM</h4>
                <h1>Alex Khoa Le</h1>
                <h4>FULL STACK WEB DEVELOPER</h4>
            </div>
            <Container className="landing-container d-flex align-items-stretch">
                <Row className="flex-fill">
                    <Col md={6} className="landing-spacing">
                        <Link to="/about" className="landing-button landing-about">
                            <div className="about-btn">
                                <p className="landing-btn-text">About Me</p>
                            </div>
                        </Link>
                    </Col>
                    <Col md={6} className="d-flex align-items-stretch">
                        <Row className="flex-fill">
                            <Col md={12} sm={6} xs={12} className="landing-spacing">
                                <Link to="/portfolio" className="landing-button">
                                <div className="portfolio-btn">
                                    <p className="landing-btn-text">Portfolio</p>
                                </div>
                                </Link>
                            </Col>
                            <Col md={12} sm={6} xs={12} className="landing-spacing">
                                <Link to="/contact" className="landing-button">
                                    <div className="contact-btn">
                                        <p className="landing-btn-text">Contact</p>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Landing;
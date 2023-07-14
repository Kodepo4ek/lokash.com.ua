import React from "react";
import {Carousel, Link, Button, Container, Row, Col } from "react-bootstrap";

import Map from '../img/icons8-location-96.png'
import Ins from '../img/icons8-instagram-48.png'
import YouTube from '../img/icons8-youtube-48.png'
import Donate from '../img/icons8-donate-64.png'


export function Futter() {
    return (
        <div className="Futter shadow-main">
            <div className="">

                <Container className="py-5">
                    <Row className="justify-content-md-center col-12">
                            <img className="col-lg-1 col-md-2" src={Map}></img>
                            <p className="col-3 center">Ukraine, Odesa, Утьосова 16 <br/>65007</p>
                </Row>
                </Container>
                <Container className="col-lg-8 pb-5 col-md-12">
                    <Row>
                        <Col >
                            <img src={Ins}></img>
                            <u className="u"><a href="https://www.instagram.com/kodepo4ek/" className="A-Slider a-Futter">@lokash.com.ua </a></u>
                        </Col>
                        <Col>
                            <img src={Ins}></img>
                            <u className="u"><a href="https://www.instagram.com/kodepo4ek/" className="A-Slider a-Futter">@kodepo4ek</a></u>
                        </Col>
                        <Col className="">
                            <img src={YouTube}></img>
                            <u className="u"><a href="https://www.youtube.com/@kodero4ek" className="A-Slider a-Futter">Локаш Кирило</a></u>
                        </Col>
                        <Col className="">
                            <img src={Donate}></img>
                            <u className="u"><a href="https://donatello.to/kodepo4eK" className="A-Slider a-Futter">Допомгти проєкту</a></u>
                        </Col>
                    </Row>
                </Container>
                
            </div>
           
        </div>
    );
}
import React from "react";
import { Nav, Navbar,  Button, Container, Row } from "react-bootstrap";
import I_Am from '../img/I_Am.png';
import Settings from '../img/icons8-gear-50.png'

import {
  createBrowserRouter,
  RouterProvider,
  Route,Routes,Router,
  Link, Outlet
} from "react-router-dom";

import Portfolio from '../pages/Portfolio';
import Donate from './Donate';
import News from '../pages/News';
import OrderSoftware from '../pages/OrderSoftware';
import MyProduct from '../pages/MyProduct';
import Video from "../pages/Video";



export function NaviBar() {
    return(
    <>
    {/* <Router> */}
        <Navbar variant="dark" sticky="top" fixed="top" style={{ backgroundColor: "#d3ab6e"}}>
        <Container className="ContainerNavbar" style={{}}>
          
          <Navbar.Brand className="col-3 col-md-3 col-sm-2 " href="#home">
            <img
              alt=""
              
              src={I_Am}
              width="70"
              height="70"
              className="d-inline-block mx-1"
            />{'lokash.com.UA '}
           
            
          </Navbar.Brand>
          
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto col-md-10 test">
            
                <Nav.Link className="active " href="/">Home</Nav.Link>
                <Nav.Link href="/news">News</Nav.Link>
                <Nav.Link href="/video">Video</Nav.Link>
                <Nav.Link href="/myproduct">My product</Nav.Link>
                <Nav.Link href="/donate">Donat</Nav.Link>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/orderSoftware">Order software</Nav.Link>
                
            </Nav>
            <Nav className="">
              
                <Button variant="warning"  className="col-5 button-LEFT"> UA</Button>   
                <Button variant="success" className=" col-6 col-md-6 ">ENG</Button>
                
                

            </Nav>
            <Nav>
              <Button className="SettingIcons2" variant="link">
              <img 
              className="SettingIcons"
              src={Settings}
               width={40}
              height={40}>

              </img>
              </Button>
            </Nav>
        </Navbar.Collapse>
        
        </Container>
      </Navbar>
      {/* </Router> */}



     

     

      {/* <Router>
        <Routes>
          {/* <Router exact path="/" component={News}/>
          <Router exact path="/" component={Video}/>
          <Router exact path="/" component={MyProduct}/> */}
          {/* <Router exact path="/" component={Donat}/> */}
          {/* <Route exact path="/" component={Portfolio}/> */}
          {/* <Router exact path="/" component={OrderSoftware}/> */}
          {/* </Routes> */}
      {/* // </Router> */ }
    
    </>
);
}
import React, { Component } from 'react'
import { NaviBar } from './NaviBar';
import { Main } from './Main';
import { Futter } from './Futter';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

export function App2()  {
  
    return (
      <>
      {/* <div>dsdsdss</div> */}
        {/* <NaviBar/> */}
        <Main/>
        <Futter/>
      </>
    )
  
}

export default App2;
import logo from './img/I_Am.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import { NaviBar } from './Components/NaviBar';
import {Main} from './Components/Main';
import {Futter} from './Components/Futter'
import './index.css';



import {App2} from '../src/Components/app2'
import {Portfolio} from '../src/pages/Portfolio';
import {Donate} from './Components/Donate';
import {News} from '../src/pages/News';
import {OrderSoftware} from '../src/pages/OrderSoftware';
import {MyProduct} from '../src/pages/MyProduct';
import {Video} from "../src/pages/Video";
import { BrowserRouter } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
  Route,Routes,Router,
  Link, Outlet
} from "react-router-dom";


// import Portfolio from "../src/pages/Portfolio";

function App() {
  return (
    
    <>
    <link rel="icon" href="../src/img/I_Am.png" type='image/png' />

    
        <NaviBar/>
        
        <Routes>  
          <Route path="/" element={<App2/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/video" element={<Video/>}/>
          <Route path="/myproduct" element={<MyProduct/>}/>
          <Route path="/donate" element={<Donate/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/orderSoftware" element={<OrderSoftware/>}/>
        </Routes>
    {/* <Main/> */}
    <Futter/>
    </>
    
  );
}

export default App;

import React, { Component } from "react";
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from "./components/AboutUs";
import Movies from "./components/Movies";

class App1 extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <hr />
        <Routes>
          <Route path="/"         element={<Home/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/movies"   element={<Movies/>}/>
        </Routes>
      </div>
    );
  }
}

export default App1;

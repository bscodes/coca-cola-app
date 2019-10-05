import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';
import MainContainer from '../MainContainer/MainContainer'

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <MainContainer />
            <Footer/>
        </Router>
    </div>
  );
}


export default App;

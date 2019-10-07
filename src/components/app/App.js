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

<<<<<<< HEAD
=======

>>>>>>> b68109d2162245ab8d4d71b80e0cec41d05fd63b
export default App;

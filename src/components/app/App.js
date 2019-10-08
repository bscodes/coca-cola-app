import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';
import MainContainer from '../MainContainer/MainContainer'

function App() {
  return (
    <div className="App">
        <HashRouter basename="/">
            <Navbar/>
            <MainContainer />
            <Footer/>
        </HashRouter>
    </div>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from '../Navbar/Navbar';
import MainContainer from '../MainContainer/MainContainer'

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <MainContainer />
        </Router>
    </div>
  );
}

/* 
önce git add . (nokta bir boşluktan sonra) ile tüm değişikleri git'e tanıtıyoruz
sonra git commit -a ile tüm değişiklikleri local repoya ekliyoruz
sonra git push origin master yazıp tamamını uzaktaki master'a yolluyoruz

git pull origin master yazarak uzaktaki değişiklikleri projeye indiriyoruz

ayrıntılar ibu sitede "https://medium.com/kodcular/k%C4%B1saca-git-ba0877d56663 ve
https://rogerdudler.github.io/git-guide/index.tr.html"


*/

export default App;

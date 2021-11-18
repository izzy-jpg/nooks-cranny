import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Product from './Product';

function App() {

  useEffect(() => {
    // in here we will call our api using axios
    axios({
      url:'http://acnhapi.com/v1/houseware/',
      method: 'GET',
      responseType: 'json',
    })
      .then(response => {
        console.log(response);
      });
  }, []);

  return (
    <div>
      <header>
        <div className="headerNav">
          <div className="logo">
            <img src={"./assets/nooksCranny.png"} alt="the Nook's Cranny logo" />
          </div>
          {/* /logo */}
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><button className="search">Search</button></li>
              <li><button className="bag">Bag</button></li>
            </ul>
          </nav>
        </div>
        {/* /headerNav */}
      <h1>Welcome to Nook's Cranny!</h1>
      <a href="#shop">Shop Now!</a>
      </header>
    </div>
  );
}

export default App;

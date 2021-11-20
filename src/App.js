import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons'

import Product from './Product';

function App() {
  const [ housewares, setHousewares ] = useState([]);
  const [ wallmounted, setWallmounted ] = useState([]);
  const [ miscProduct, setMiscProduct ] = useState([]);


  // api call: houseware
  useEffect(() => {
    // in here we will call our api using axios
    axios({
      url:'http://acnhapi.com/v1/houseware/',
      method: 'GET',
      responseType: 'json'
    })
      .then(response => {
        setHousewares([response.data.yucca[0], response.data.cat_tower[4], response.data.jukebox[0], response.data.pinball_machine[1]]);
      });
  }, []);


  // api call: wallmounted
  useEffect(() => {
    axios({
      url: 'http://acnhapi.com/v1/wallmounted/',
      method:'GET',
      responseType: 'json'
    })
      .then(response => {
        setWallmounted([response.data.pendulum_clock[0], response.data.air_conditioner[2], response.data.world_map[1], response.data.pot_rack[2]])

      })
  }, [])

  // api call: misc
  useEffect(() => {
    axios({
      url: 'http://acnhapi.com/v1/misc/',
      method:'GET',
      responseType: 'json'
    })
      .then(response => {
        setMiscProduct([response.data.cute_music_player[0], response.data.fancy_violin[0], response.data.microwave[3], response.data.traditional_tea_set[1]])

      })
  }, [])


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
              <li><a href="#" aria-label="Home"><FontAwesomeIcon icon={faHome}/></a></li>
              <li><button className="search" aria-label="Search"><FontAwesomeIcon icon={faSearch}/></button></li>
              <li><button className="cart"><img src={"./assets/cartIcon.png"} alt="Your shopping cart"/> </button></li>
            </ul>
          </nav> 
        </div>
        {/* /headerNav */}
      <h1>Welcome to Nook's Cranny! <span className="cranny">(...cranny!)</span></h1>
      <img src={"./assets/tommyAndTimmyBoxes.png"} alt="Tommy and Timmy Nook" />
      <a href="#shop">Shop Now!</a>
      </header>

      {
        housewares.map(item =>{
          return(
            <Product
            id={item["file-name"]}
            name={item.name["name-USen"]}
            imagePath={item.image_uri}
            price={item["buy-price"]}
            />
          )
        })
      }

    {
      wallmounted.map(item => {
        return(
          <Product 
          id={item["file-name"]}
          name={item.name["name-USen"]}
          imagePath={item.image_uri}
          price={item["buy-price"]}/>
        )
      })
    }

{
      miscProduct.map(item => {
        return(
          <Product 
          id={item["file-name"]}
          name={item.name["name-USen"]}
          imagePath={item.image_uri}
          price={item["buy-price"]}/>
        )
      })
    }

    </div>
  );
}

export default App;

import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons'

import Product from './Product';

function App() {
  const [housewares, setHousewares] = useState([]);
  const [wallmounted, setWallmounted] = useState([]);
  const [miscProduct, setMiscProduct] = useState([]);


  // api call: housewares
  useEffect(() => {
    // in here we will call our api using axios
    axios({
      url: 'http://acnhapi.com/v1/houseware/',
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
      method: 'GET',
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
      method: 'GET',
      responseType: 'json'
    })
      .then(response => {
        setMiscProduct([response.data.cute_music_player[0], response.data.fancy_violin[0], response.data.microwave[3], response.data.traditional_tea_set[1]])
      })
  }, [])





  return (
    <>

      {/* header begins */}
      <header>
        <div className="headerTop">
          <div className="wrapper headerNav">
            <div className="logo">
              <img src={"./assets/nooksCranny.png"} alt="the Nook's Cranny logo" />
            </div>
            {/* /logo */}
            <nav>
              <ul>
                <li className="home"><a href="#" aria-label="Home"><FontAwesomeIcon icon={faHome} /></a></li>
                <li><button className="search" aria-label="Search"><FontAwesomeIcon icon={faSearch} /></button></li>
                <li><button className="cart"><img src={"./assets/cartIcon.png"} alt="Your shopping cart" /></button></li>
              </ul>
            </nav>
          </div>
          {/* /wrapper */}
        </div>
        {/* /headerNav */}
        <div className="headerImgTxt wrapper">
          <div className="headerTxt">
            <h1>Welcome to <span className="nooks">Nook's Cranny!</span> <span className="cranny">(...cranny!)</span></h1>
            <a href="#shop" className="shopNow">Shop Now!</a>
          </div>
          {/* /headerText */}
          <div className="headerImg">
            <img src={"./assets/tommyAndTimmyBoxes.png"} alt="Tommy and Timmy Nook" />
          </div>
          {/* /headerImg */}
        </div>
      </header>
      {/* header ends here */}




      {/* main begins */}
      <main>
        <div className="mainSection wrapper">
        <section className="filterSection">
          <div className="filterContainer">
          <h2>Filters</h2>
          <button className="filterHouseware">Houseware</button>
          <button className="filterWallmounted">Wall Mounted</button>
          <button className="filterMisc">Miscellaneous</button>
          </div>
        </section>
        {/* /filterContainer */}


        <section className="shopSection" id="shop">
          <h2>Items For Sale</h2>
          <ul className="productContainer wrapper">
            {/* renders the products to the page */}
            {
              housewares.map(item => {
                return (
                  <Product
                    id={item["file-name"]}
                    name={item.name["name-USen"]}
                    imagePath={item.image_uri}
                    price={item["buy-price"]}
                  />
                );
              })
            }

            {
              wallmounted.map(item => {
                return (
                  <Product
                    id={item["file-name"]}
                    name={item.name["name-USen"]}
                    imagePath={item.image_uri}
                    price={item["buy-price"]} />
                );
              })
            }

            {
              miscProduct.map(item => {
                return (
                  <Product
                    id={item["file-name"]}
                    name={item.name["name-USen"]}
                    imagePath={item.image_uri}
                    price={item["buy-price"]} />
                );
              })
            }
          </ul>
          {/* /productContainer */}
        </section>
        {/* /shopSection #shop */}
        </div>
        {/* /mainSection /wrapper */}
      </main>
      {/* main ends */}




      {/* footer begins */}
      <footer>
        <p>Created at <a href="https://junocollege.com/" className="juno">Juno College</a></p>
      </footer>
    </>
  );
}

export default App;

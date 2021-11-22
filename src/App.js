import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons'

import Product from './Product';
import FilterForm from './FilterForm';

function App() {
  const [housewares, setHousewares] = useState([]);
  const [wallmounted, setWallmounted] = useState([]);
  const [miscProduct, setMiscProduct] = useState([]);


  // api call: housewares
  useEffect(() => {
    // in here we will call our api using axios
    axios({
      url: 'https://acnhapi.com/v1/houseware/',
      method: 'GET',
      responseType: 'json'
    })
      .then(response => {
        const item = response.data;

        // creates array of the items we want to use from the response
        const itemArray = ([item.yucca[0], item.cat_tower[4], item["throwback_race-car_bed"][1], item.pinball_machine[1]]);

        // adds a new property so we can filter them later
        const withType = itemArray.map(piece => {
          return { ...piece, type: "houseware" };
        })
        // sets state of housewares
        setHousewares(withType);
      });
  }, []);


  // api call: wallmounted
  useEffect(() => {
    axios({
      url: 'https://acnhapi.com/v1/wallmounted/',
      method: 'GET',
      responseType: 'json'
    })
      .then(response => {
        const item = response.data

        // creates array of the items we want to use from the response
        const itemArray = ([item.cuckoo_clock[3], item.air_conditioner[2], item.corkboard[3], item.pot_rack[2]])

        // adds a new property so we can filter them later
        const withType = itemArray.map(piece => {
          return { ...piece, type: "wallmounted" };
        })

        // sets state of wallmounted
        setWallmounted(withType)
      })
  }, [])

  // api call: misc
  useEffect(() => {
    axios({
      url: 'https://acnhapi.com/v1/misc/',
      method: 'GET',
      responseType: 'json'
    })
      .then(response => {
        const item = response.data
        
        // creates array of the items we want to use from the response
        const itemArray = ([item.cute_music_player[0], item.fancy_violin[0], item.microwave[3], item.traditional_tea_set[1]]);

        // adds a new property so we can filter them later
        const withType = itemArray.map(piece => {
          return { ...piece, type: "misc" };
        })

        // sets state of wallmounted
        setMiscProduct(withType)
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
                <li className="home"><a href="#topOfPage" aria-label="Home"><FontAwesomeIcon icon={faHome} /></a></li>
                <li><button className="search" aria-label="Search"><FontAwesomeIcon icon={faSearch} /></button></li>
                <li><button className="cart"><img src={"./assets/cartIcon.png"} alt="Your shopping cart" /></button></li>
              </ul>
            </nav>
          </div>
          {/* /wrapper */}
        </div>
        {/* /headerNav */}
        <div className="headerImgTxt wrapper" id="topOfPage">
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
            <FilterForm />
          </section>
          {/* filterSection */}

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
                      size={item.size}
                      colour={item.variant}
                      tag={item.tag}
                      sellPrice={item["sell-price"]}
                      type="houseware"
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
                      price={item["buy-price"]}
                      size={item.size}
                      colour={item.variant}
                      tag={item.tag}
                      sellPrice={item["sell-price"]}
                      type="wallmounted"
                    />
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
                      price={item["buy-price"]}
                      size={item.size}
                      colour={item.variant}
                      tag={item.tag}
                      sellPrice={item["sell-price"]}
                      type="misc"
                    />
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
      {/* footer ends */}
    </>
  );
}

export default App;

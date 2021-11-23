// App.js

// imports
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons'

import Product from './Product';
import FilterForm from './FilterForm';

// app function
function App() {
  // setting states
  const [allProducts, setAllProducts] = useState([])


  // api calls
  useEffect(() => {

    const urls = ['https://acnhapi.com/v1/houseware/', 'https://acnhapi.com/v1/wallmounted/', 'https://acnhapi.com/v1/misc/'];

    const requests = urls.map((url) => {
      return fetch(url)
        .then((response) => {
          return response.json();
        });
    });

    // creating a promise to return all api calls at once
    Promise.all(requests)
      .then((jsonData) => {
        const housewareObj = jsonData[0];
        const wallmountedObj = jsonData[1];
        const miscObj = jsonData[2];

        // getting the specific items we want back
        const housewareArray = [housewareObj.yucca[0], housewareObj.cat_tower[4], housewareObj["throwback_race-car_bed"][1], housewareObj.pinball_machine[1]];

        const wallmountedArray = [wallmountedObj.cuckoo_clock[3], wallmountedObj.air_conditioner[2], wallmountedObj.corkboard[3], wallmountedObj.pot_rack[2]];

        const miscArray = [miscObj.cute_music_player[0], miscObj.fancy_violin[0], miscObj.paper_tiger[0], miscObj.traditional_tea_set[1]];


        // adding the "type" property
        const housewareWithType = housewareArray.map(item => {
          return { ...item, type: "houseware" };
        });
        const wallmountedWithType = wallmountedArray.map(item => {
          return { ...item, type: "wallmounted" };
        });
        const miscWithType = miscArray.map(item => {
          return { ...item, type: "misc" };
        });

        // combines all [type]withType arrays into one
        const allWithType = [...housewareWithType, ...wallmountedWithType, ...miscWithType]

        // setting allProducts to be all 12 items with the "type" property
        setAllProducts(allWithType);
      });
  }, []);





  // RETURN
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
              {allProducts.map(item => {
                return (
                  <Product product={item} key={item["file-name"]} />
                )
              })}

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

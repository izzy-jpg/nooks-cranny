// App.js

// imports
import './App.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons'

// import components
import FilterForm from './components/FilterForm';
import Popup from './components/Popup'

// app function
function App() {
  // setting states
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [toggleCart, setToggleCart] = useState(false);
  const [cart, setCart] = useState([])
  const [cartNumber, setCartNumber] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isOpen, setIsOpen] = useState(false);


  // toggles the more info modal
  const toggleMoreInfo = () => {
    setIsOpen(!isOpen);
  }

  // checks length of cart
  useEffect(() => {
    setCartNumber(cart.length)
  }, [cart])

  // add to cart function
  const addToCart = (item) => {
    setCart([...cart, item])
    setTotalPrice(() => totalPrice + item["buy-price"])
  };

  // remove from cart function
  const removeFromCart = (item, index) =>{
    setCart(result => result.filter((_, i) => i !== index));
    setTotalPrice(totalPrice - item["buy-price"])
}


  const getProducts = (type) => {


    // create a copy of allProducts
    const copyOfAllProducts = [...allProducts];

    // if the filter is 'all', return all products
    if (type === "all") {
      setFilteredProducts(copyOfAllProducts);
    } else {
      // otherwise: loop over it using filter()
      const productsFiltered = copyOfAllProducts.filter(eachProduct => {
        // return only products that match
        return eachProduct.type === type;
      })
      setFilteredProducts(productsFiltered);
    };
  };


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
        setFilteredProducts(allWithType)
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
            <div className="dropdown">
              <button className="menu" aria-label="Menu"><FontAwesomeIcon icon={faBars} /></button>
              <nav>
                <ul>
                  <li className="home"><a href="#topOfPage" aria-label="Home"><FontAwesomeIcon icon={faHome} /></a></li>
                  <li>
                    <div className="cartWithNumber">
                      <button className="cart" onClick={() => setToggleCart(!toggleCart)}><img src={"./assets/cartIcon.png"} alt="Your shopping cart" /></button>
                      <span className="cartNumber">{cartNumber}</span>
                  </div>
                  {/* if toggleCart is true */}
                    {toggleCart 
                    // return the following
                      ? <div className="cartOpen">
                        <p className="cartHeader">Cart</p>
                        <div className="cartItems">
                          {
                            // if there is more than 0 items in the cart:
                            cart.length > 0
                            // map the items
                              ? (cart.map((item, index) => {
                                const itemName = item.name["name-USen"];
                                const itemPrice = item["buy-price"];

                                return (
                                  <div className="itemInCart" key={index}>
                                    <div className="itemInfo">
                                    <p className="cartItemName">{itemName}</p>
                                    <div className="priceContainer">
                                      <div className="bells">
                                        <img src="./assets/bells.png" alt="bells" />
                                      </div>
                                      {/* /bells */}
                                      <p className="price">{itemPrice}</p>
                                    </div>
                                    {/* /priceContainer */}
                                    </div>
                                    {/* /itemInfo */}
                                    <button className="removeItem" onClick={() => removeFromCart(item, index)}>X</button>
                                  </div>
                                  // /itemInCart
                                )
                              }))
                              // otherwise display nothing
                              : <p className="noItems">Add something!</p>
                          }
                        </div>
                        {/* /cartItems */}
                        <div className="totalPrice">
                          <p>Total:</p>
                          <div className="priceContainer">
                          <div className="bells">
                            <img src="./assets/bells.png" alt="bells" />
                          </div>
                          {/* /bells */}
                          <p className="price">{totalPrice}</p>
                          </div>
                          {/* /priceContainer */}
                        </div>
                        {/* /totalPrice */}
                      </div>
                      // /cartOpen
                      : null
                    }
                  </li>
                </ul>
              </nav>
            </div>
            {/* /dropdown */}
          </div>
          {/* /wrapper */}
        </div>
        {/* /headerNav */}
        <div className="headerImgTxt wrapper" id="topOfPage">
          <div className="headerTxt">
            <h1>Welcome to <span className="nooks">Nook's Cranny!</span> <span className="cranny">(...cranny!)</span></h1>
            <a href="#jumpToMain" className="shopNow">Shop Now!</a>
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
      <main id="jumpToMain">
        <div className="mainSection wrapper">
          <section className="filterSection">
            {/* renders FilterForm component, passing getProducts in as a prop */}
            <FilterForm getProducts={getProducts} />
          </section>
          {/* filterSection */}

          <section className="shopSection" id="shop">
            <h2>Items For Sale</h2>
            <ul className="productContainer wrapper">

              {/* renders the products to the page */}
              {filteredProducts.map(item => {
                return (
                  // posts products to the page
                  <li className="product" key={item["file-name"]}>
                    <div className="productImage">
                      <img src={item.image_uri} alt={item.name["name-USen"]} />
                    </div>
                    {/* /imgButton */}
                    <h3 className="productName">{item.name["name-USen"]}</h3>
                    <div className="priceContainer">
                      <div className="bells">
                        <img src="./assets/bells.png" alt="bells" />
                      </div>
                      {/* /bells */}
                      <p className="price">{item["buy-price"]}</p>
                    </div>
                    {/* /priceContainer */}
                    <div className="buttonContainer">
                      <button className="moreInfo" onClick={toggleMoreInfo}>more info</button>
                      <button className="addToCart" onClick={() => addToCart(item)}>Add to cart</button>
                    </div>
                    {/* /buttonContainer */}

                    {/* when isOpen=true, show Popup */}
                    {isOpen ?
                      <Popup content={
                        <>
                          <div className="imgButton">
                            <div className="productImage">
                              <img src={item.image_uri} alt={item.name["name-USen"]} />
                            </div>
                            {/* /productImage */}
                            <button className="addToCart" onClick={() => addToCart(item)}>add to cart</button>
                          </div>
                          {/* /imgButton */}
                          <div className="productInfo">
                            <h3 className="productName">{item.name["name-USen"]}</h3>
                            <div className="priceContainer">
                              <div className="bells">
                                <img src="./assets/bells.png" alt="bells" />
                              </div>
                              {/* /bells */}
                              <p className="price">{item["buy-price"]}</p>
                            </div>
                            {/* /priceContainer */}
                            <div className="extraInfo">
                              <p>Category: {item.type}</p>
                              <p>Size: {item.size}</p>
                              <p>Tagged: {item.tag}</p>
                              <div className="priceContainer">
                                <p>Sells for: </p>
                                <div className="bells">
                                  <img src="./assets/bells.png" alt="bells" />
                                </div>
                                {/* /bells */}
                                <p className="price">{item["sell-price"]}</p>
                              </div>
                              {/* /priceContainer */}
                            </div>
                            {/* /extraInfo */}
                          </div>
                          {/* /productInfo */}
                        </>
                      }
                        handleClose={toggleMoreInfo}
                      />
                      // otherwise, show nothing
                      : null
                    }
                  </li>
                )
              })}

            </ul>
            {/* /productContainer */}
          </section>
          {/* /shopSection */}
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

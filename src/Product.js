// Product.js
import { useState } from 'react';
import Popup from './Popup';

function Product(props) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMoreInfo = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  }





  return (
    // posts products to the page
    <li className="product" key={props.id}>
      <div className="productImage">
        <img src={props.imagePath} alt={props.name} />
      </div>
      {/* /productImage */}
      <h3 className="productName">{props.name}</h3>
      <div className="priceContainer">
        <div className="bells">
          <img src="./assets/bells.png" alt="bells" />
        </div>
        {/* /bells */}
        <p className="price">{props.price}</p>
      </div>
      {/* /priceContainer */}
      <button className="moreInfo" onClick={toggleMoreInfo}>more info</button>
      <button className="addToCart">Add to cart</button>
      {
        isOpen && <Popup
          content={
            <>
              <div className="productImage">
                <img src={props.imagePath} alt={props.name} />
              </div>
              {/* /productImage */}
              <div className="productInfo">
                <h3 className="productName">{props.name}</h3>
                <div className="priceContainer">
                  <div className="bells">
                    <img src="./assets/bells.png" alt="bells" />
                  </div>
                  {/* /bells */}
                  <p className="price">{props.price}</p>
                </div>
                {/* /priceContainer */}
                <div className="extraInfo">
                  <p>Size: {props.size}</p>
                  <p>Colour: {props.colour}</p>
                  <div className="priceContainer">
                    <p>Sells for: </p>
                    <div className="bells">
                      <img src="./assets/bells.png" alt="bells" />
                    </div>
                    {/* /bells */}
                    <p className="price">{props.sellPrice}</p>
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
      }
    </li>
    // product
  )
};

export default Product;
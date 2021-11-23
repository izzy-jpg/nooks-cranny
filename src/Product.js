// Product.js
import { useState } from 'react';
import Popup from './Popup';

function Product(props) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMoreInfo = () => {
    setIsOpen(!isOpen);
  }

  const item = props.product;



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
        <button className="addToCart">Add to cart</button>
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
                <button className="addToCart">add to cart</button>
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
    // product
  )
};

export default Product;
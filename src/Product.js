// Product.js

import './App.css';

function Product(props){
  return(
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
      <button className="moreInfo">more info</button>
      <button className="addToCart">add to cart</button>
    </li>
    // product
  )
};

export default Product;
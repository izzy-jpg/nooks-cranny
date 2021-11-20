// Product.js

function Product(props){
  return(
    <div className="product" key={props.id}>
      <div className="productImage">
        <img src={props.imagePath} alt={props.name} />
      </div>
      {/* /productImage */}
      <p className="productName">{props.name}</p>
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
    </div>
    // product
  )
};

export default Product;
// Product.js

function Product(props){

  return(
    <div className="product" key={props.id}>
      <div className="productImage">
        <img src={props.imagePath} alt={props.name} />
      </div>
      <p className="productName">{props.name}</p>
      <div className="priceContainer">
        <div className="bells">
          <img src="./assets/bells.png" alt="bells" />
        </div>
      <p className="price">{props.price}</p>
      </div>

    </div>
  )
};

export default Product;
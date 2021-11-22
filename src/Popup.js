// Popup.js

function Popup(props) {
  return (
    <div className="popup">
      <button className="closeBox" onClick={props.handleClose}>x</button>
      <div className="moreInfoBox" >
        {props.content}
      </div>
      {/* /moreInfoBox */}
      <button className="addToCart">add to cart</button>
    </div>
    // /popup
  )
}

export default Popup;
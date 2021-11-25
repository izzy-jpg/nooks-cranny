// Popup.js

// creates popup when moreInfo button is clicked
function Popup(props) {
  return (
    <div className="popup">
      <button 
      className="closeBox" 
      aria-label="close popup" 
      onClick={props.handleClose}
      >x</button>
      <div className="moreInfoBox" >
        {props.content}
      </div>
      {/* /moreInfoBox */}
    </div>
    // /popup
  )
}

export default Popup;
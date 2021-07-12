import React from "react";
import PropTypes from "prop-types";

function Keg(props){

  return (
    <React.Fragment>
      <div className="row">
        <div className="column left" onClick = {() => props.whenKegClicked(props.id)}>
          <h3><span className="Detail-link">{props.name} - {props.price}</span></h3>
        </div>
        <div className="column right">
        <button onClick={() => props.whenSellClicked(props.id)}>Sell a Pint!</button>  
        </div>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenSellClicked: PropTypes.func
};

export default Keg;

import React, { Component } from 'react';

class Cart extends Component {
  render() {
    const { itemname, price } = this.props;

    return (
      <div style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        width: "250px"
      }}>
        <h4>{itemname}</h4>
        <p>Price: ₹{price}</p>
      </div>
    );
  }
}

export default Cart;

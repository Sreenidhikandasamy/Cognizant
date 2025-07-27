import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { itemname: "Laptop", price: 70000 },
        { itemname: "Smartphone", price: 25000 },
        { itemname: "Headphones", price: 3000 },
        { itemname: "Smartwatch", price: 8000 },
        { itemname: "Keyboard", price: 1500 }
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>🛒 Online Shopping Cart</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.state.items.map((item, index) => (
            <Cart key={index} itemname={item.itemname} price={item.price} />
          ))}
        </div>
      </div>
    );
  }
}

export default OnlineShopping;

import React from 'react'

function Cart({ cartItems, totalItems, removeFromCart }) {

  return (
    <div>
      <h2>Cart ({totalItems})</h2>
      
      {cartItems ? (cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name} - ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button 
          onClick={() => removeFromCart(item)}
          className='text-red-500 hover:red-800'>Remove from cart</button>
        </div>
       
      ))):( <p>Your cart is empty.</p> )}
    </div>
  );
}

export default Cart; 
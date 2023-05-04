import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Cart from './components/Cart'

export default function CartPage(){
	// const [ cart, setCart] = useState([]);

	// const handleRemoveFromCart = (productId) => {
  //   setCart(cart.filter(product => product.id !== productId))
  // }
  return (
  	<div>
      <Head>
        <title>Cart - Simple Shopping</title>
      </Head>


      <main>
        <h1>Cart</h1>

        <Cart />

        <Link href="/shop">
          <button className= 'mt-4 p-2 bg-emerald-700 hover:bg-blue-800 rounded-sm'>
            ← Back to Products
          </button>
        </Link>
  			{/*{cart.length === 0 ? <p>Your cart is empty</p> :
          <ul>
            {cart.map(product => (
              <li key={product.id}>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button 
                onClick={() => handleRemoveFromCart(product.id)}
                className='text-red-600 hover:text-red-800'
                >Remove</button>
              </li>
            ))}
          </ul>
          }*/}
      </main>
    </div>
  	)
}
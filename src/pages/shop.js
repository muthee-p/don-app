import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link';
import {Header, ProductList, Cart}  from "./components";
import {Paul, Tree} from '../assets'


export default function Shop(){
   const [cartItems, setCartItems] = useState([]);
   const [itemsCount, setItemsCount ] = useState(0);

    const products = [
  {
    id: 1,
    name: 'Landscape',
    price: 9.99,
    image: Paul,
    description: 'A very green painting',
    priceId: 'price_1N3zmaAy6kbtVnGKpjDBBStw'

  },
  {
    id: 2,
    name: 'Dog',
    price: 19.99,
    image: Tree,
    description: 'A very Brown painting',
    priceId: 'price_1N3zjrAy6kbtVnGKRd0NuBNu'
  }
  ]

  const totalItems = cartItems ? cartItems.length : 0;
  
  const addToCart = (product) => {

    setCartItems([...cartItems, product])
  }
  const removeFromCart = (product) => {
  const index = cartItems.findIndex((item) => item.id === product.id);
  if (index !== -1) {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  }
};


  //const handleRemoveFromCart = (productId) => {
  //   setCart(cart.filter(product => product.id !== productId))
  // }

  // const removeFromCart = (product) => {
  //   setCartItems((prevCartItems) => 
  //     prevCartItems.filter((item) => item.id !== product.id));
  // };

  

  return(
    <div>
      <Head>
        <title>Simple Shopping</title>
        <meta name="description" content="A simple e-commerce site using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' min-h-[100vh] w-full flex justify-center flex-col items-center' >
        

        <Header cartItems={cartItems} totalItems={totalItems} />
        <ProductList products={products} onAddToCart={addToCart} />
        <Cart cartItems={cartItems} 
        removeFromCart={removeFromCart} 
        totalItems={totalItems} />

    {/*    <h2>Products</h2>
        <ul className= 'flex justify-between'>
          {products.map(product => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p className='text-xl'>${product.price}</p>
              <button onClick={() => handleAddToCart(product)}
              className='text-blue-800 hover:text-blue-600'
              >Add to Cart</button>
            </li>
          ))}
        </ul>*/}
      </main>
    </div>
    )
}
import ProductItem from './ProductItem';


function ProductList({ products, onAddToCart }) {
  return (
    <div>
      <h1>Products</h1>
      <div className='flex justify-between'>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} productId={product.productId}/>
      ))}

       {/*<button className='m-4 p-2 bg-emerald-700 hover:bg-blue-800 rounded-sm' 
            onClick={(() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1N3zmaAy6kbtVnGKpjDBBStw",
                    quantity: 1
                  },
                ],
              })
            })}>Buy Both</button>*/}
      </div>
    </div>
  );
}

export default ProductList;

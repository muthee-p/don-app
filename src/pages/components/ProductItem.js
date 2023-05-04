import React from 'react';
import Image from 'next/image'
import { checkout } from "../../../checkout";

function ProductItem({ product, onAddToCart }) {
  const { id, name, price, image, description, priceId } = product;

  return (
    <div className="border rounded-md m-2 overflow-hidden">
      <Image className="w-full"  src={image} alt={name} />
      <div className="p-4">
        <h2 className="font-bold text-lg">{name}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
        <p className="text-gray-300 text-xl font-body">${price.toFixed(2)}</p>

        <button className="mt-4 p-2 bg-orange-500 hover:bg-emerald-700 rounded-sm"
          onClick={() => onAddToCart(id)}>Add to Cart</button>

          <button className='m-4 p-2 bg-emerald-700 hover:bg-blue-800 rounded-sm' 
            onClick={(() => {
              checkout({
                lineItems: [
                  {
                    price: priceId,
                    quantity: 1
                  }
                  
                ],
              })
            })}>Buy</button>
      </div>

    </div>
  );
}

export default ProductItem;

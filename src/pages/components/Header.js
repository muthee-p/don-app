import Link from "next/link";
import { ReactSVG } from 'react-svg';
import { svgs } from '../../assets/svgs.js';


function Header({ cartItems, totalItems }) {
  // const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <nav className='flex justify-between p-2  '>
        <div className='mr-12'>
          <h1 className='text-orange-500 p-2 text-xl font-heading' >
            <Link href='/'> Simple Shopping
            </Link></h1>
        </div>
      {/*{new Date().getFullYear()}*/}
        <ul className='inline-flex p-2 text-md text-sm'>
          <li>
            <Link href="/">
              <button className='font-body mr-4 hover:text-orange-500'>Home</button>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <button className='font-body hover:text-orange-500'>
                 <ReactSVG src={svgs.myCart} />
               Cart ({totalItems})
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className=" bg-amber-400 flex flex-row items-center px-6 py-3">
      <div className="logo-container">
        <Link href="/">
          <p className="text-lg font-bold">MyShop</p>
        </Link>
      </div>
      <ul className="nav-links justify-end flex-1 flex items-center gap-8 mr-8 text-lg">
        <li className="hover:text-gray-700 transition-colors">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-gray-700 transition-colors">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-gray-700 transition-colors">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="hover:text-gray-700 transition-colors">
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <button type="button" className="cart-icon">
            <AiOutlineShopping size={24} />
            <span className="cart-item-qty absolute -top-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

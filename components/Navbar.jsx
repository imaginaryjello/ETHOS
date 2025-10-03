import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="containerNavbar main">
      <nav className="bg-amber-400 flex items-center px-6 py-3">
        {/* Logo always visible */}
        <div className="logo-container">
          <Link href="/">
            <p className="text-lg font-bold">MyShop</p>
          </Link>
        </div>

        {/* On large screens show full nav; hidden on small & mid */}
        <Bars3Icon className="h-8 w-8 text-gray-800 lg:hidden flex flex-1 justify-end cursor-pointer">
          {/* Mobile menu icon */}
          <span className="sr-only">Open main menu</span>
        </Bars3Icon>
        <ul className="hidden lg:flex flex-1 justify-end items-center gap-8 text-lg">
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
          <li className="relative">
            <button type="button" className="cart-icon">
              <AiOutlineShopping size={24} />
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

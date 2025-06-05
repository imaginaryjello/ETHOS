// app/page.js
import React from "react";

import { Product, FooterBanner, HeroBanner } from "../components";

export default function Home() {
  return (
    <>
      HeroBanner
      <div className="justify-center items-center text-center">
        <h1 className="text-5xl font-bold">Welcome to Our Store</h1>
        <h2 className="text-3xl font-extrabold">Best Selling Products</h2>
        <p class="text-base text-gray-600">
          Check out our best selling products below.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {["Product 1", "Product 2", "Product 3"].map((product) => product)}
      </div>
      <FooterBanner />
    </>
  );
}

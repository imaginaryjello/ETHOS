"use client";

// app/page.js

import React from "react";
import { client } from "../lib/client";

import { Product, FooterBanner, HeroBanner } from "../components";

export default async function Home() {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log("Banner Data:", bannerData)}
      <div>
        <img src="../public/hempbag.jpg"></img>
      </div>
      <div className="justify-center items-center text-center">
        <h1 className="text-5xl font-bold">Welcome to Our Store</h1>
        <h2 className="text-3xl font-extrabold">Best Selling Products</h2>
        <p className="text-base text-gray-600">
          Check out our best selling products below.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner />
    </div>
  );
}

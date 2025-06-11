// app/page.js
import React from "react";
import { client } from "../lib/client";

import { Product, FooterBanner, HeroBanner } from "../components";

export default function Home({ products, bannerData }) {
  return (
    <div>
      <HeroBanner />
      {console.log(bannerData)}
      <div className="justify-center items-center text-center">
        <h1 className="text-5xl font-bold">Welcome to Our Store</h1>
        <h2 className="text-3xl font-extrabold">Best Selling Products</h2>
        <p className="text-base text-gray-600">
          Check out our best selling products below.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {products?.map((product) => product.name)}
      </div>
      <FooterBanner />
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[__type=="product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[__type="banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
};

import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div className="cursor-pointer scale-[1, 1] hover:scale-[1.05, 1.05] transition-transform duration-300 ease-in-out rounded-lg shadow-lg bg-white p-4 flex flex-col items-center justify-center gap-2 hover:shadow-xl hover:bg-gray-50">
      <Link href={"/product/$(slug.current"}>
        <div>
          <img src={urlFor(image && image[0])} width={250} height={250}></img>
          <p>{name}</p>
          <p className="text-gray-600">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;

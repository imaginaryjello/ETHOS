import React from "react";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="px-[100px] py-20 bg-[#dcdcdc] rounded-2xl relative h-[500px] leading-[0.9] w-full">
      <div>
        <p className="text-2xl">Small Text</p>
        <h3
          className="text-[4rem] mt-1
        "
        >
          Mid text
        </h3>
        <img className="" src="null" alt="Hero image"></img>

        <Link href="/product/ID">
          <button
            type="button"
            className="rounded-full text-white px-2.5 py-4 bg-red-600 border-0 mt-10 text-[18px] font-medium cursor-pointer  hover:bg-red-500 transition"
          >
            Button Text
          </button>
        </Link>
        <div className="desc absolute right-2 bottom-1 w-2xs leading-[1.3] flex flex-col text-[#324d67}">
          <h5 className="mb-3 font-bold text-[1rem] self-end">Description</h5>
          <p className="text-[#5f5f5f] font-thin text-end">
            This is a description of the product or service offered. It should
            be engaging and informative.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

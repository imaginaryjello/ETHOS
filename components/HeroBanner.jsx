import React from "react";
import Link from "next/link";
import { urlFor } from "@/lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-10 sm:py-16 lg:py-20 bg-[#F0EADC] bg-cover  relative min-h-[400px] sm:min-h-[500px] overflow-hidden ">
      <div>
        {/* <img
          className="absolute inset top-0 left-0 object-cover opacity-20"
          src={
            "https://thumbs.dreamstime.com/z/demeter-goddess-harvest-agriculture-ancient-greek-religion-mythology-woman-sheaf-grain-hands-158228254.jpg"
          }
        ></img> */}
        <p className="text-lg sm:text-xl">{heroBanner.smallText}</p>

        <h3 className="text-3xl sm:text-4xl mt-1 font-semibold">
          {heroBanner.midText}
        </h3>

        <h1 className="flex relative z-10 text-5xl sm:text-7xl lg:text-8xl text-white -mt-2 uppercase font-bold leading-tight">
          {heroBanner.largeText1}
        </h1>
        <div className="absolute inset-0 z-0 flex justify-end items-center pr-48">
          <img
            src={urlFor(heroBanner.image).url()}
            alt="Hero image"
            className="h-full w-auto py-5 object-contain  object-right"
            // className="absolute opacity-90 z-0 top-0 right-4 sm:right-[10%] w-[200px] sm:w-[300px] lg:w-[450px] lg:mb-5 h-auto object-center"
          />
        </div>

        <Link href="/product/ID">
          <button
            type="button"
            className="rounded-full text-white px-6 py-3 bg-red-600 border-0 mt-8 text-base sm:text-lg font-medium cursor-pointer hover:bg-red-500 transition"
          >
            {heroBanner.buttonText || "Button Text"}
          </button>
        </Link>

        <div className="desc absolute right-4 bottom-4 max-w-sm leading-snug flex flex-col text-[#324d67]">
          <h5 className="mb-2 font-bold text-sm sm:text-base self-end">
            Description
          </h5>
          <p className="text-[#5f5f5f] font-light text-right text-sm">
            {heroBanner.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

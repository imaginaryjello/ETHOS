import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterBanner = ({
  footerBanner: {
    largeText2,
    discount,
    saleTime,
    smallText,
    desc,
    product,
    buttonText,
  },
}) => {
  return (
    <footer className="bg-[#8A9A5B] text-white sm:p-12">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
        {/* Branding */}
        <div>
          <Image src="/logos.png" alt="Hemp Bag Logo" width={200} height={60} />
          <h3 className="text-4xl mt-3 font-bold">{largeText2}</h3>
          <p className="text-lg sm:text-xl mt-2">{desc}</p>
        </div>

        {/* Contact / Social */}
        <div>
          <p className="text-lg font-semibold mt-4">Contact us</p>
          <div className="flex flex-row gap-4 mt-3">
            {["/image copy 2.png", "/image copy.png", "/image.png"].map(
              (src, i) => (
                <a href="#" key={i}>
                  <Image
                    src={src}
                    alt={`Social icon ${i + 1}`}
                    width={40}
                    height={40}
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </a>
              )
            )}
          </div>
        </div>

        {/* Promo / CTA */}
        <div>
          <p className="text-lg">{smallText}</p>
          <h3 className="text-2xl sm:text-3xl font-semibold mt-1">
            {discount}
          </h3>
          <p className="text-lg mt-1">{saleTime}</p>
          <Link href={`/product/${product}`}>
            <button className="mt-4 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 shadow-lg transition duration-300">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterBanner;

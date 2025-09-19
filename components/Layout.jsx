import React from "react";
import Head from "next/head";

import FooterBanner from "./FooterBanner";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>ETHOS</title>
        <meta name="description" content="ETHOS - Your Fashion Destination" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Layout;

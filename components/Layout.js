import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import VisionSection from "./VisionSection";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Manhua Lu</title>
        <meta name="description" content="Manhua's portfolio website"></meta>
      </Head>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        {/* should have footer section here too */}
      </div>
    </div>
  );
};

export default Layout;

import React from "react";
import Head from "next/head";
// import { Roboto } from "@next/font/google";

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: "400",
// });

import { Inconsolata } from "@next/font/google";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsalata",
});

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Manhua Lu</title>
        <meta name="description" content="Manhua's portfolio website"></meta>
      </Head>
      <div className="flex min-h-screen flex-col">
        <main className={`${inconsolata.variable} flex-grow`}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;

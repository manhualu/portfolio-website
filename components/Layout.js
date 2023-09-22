import React from "react";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Manhua Lu</title>
        <meta name="description" content="Manhua's portfolio website"></meta>
      </Head>
      <div className="flex min-h-screen flex-col">
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

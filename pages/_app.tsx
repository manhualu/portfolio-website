import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "./Footer";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import "@radix-ui/themes/styles.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen flex-col justify-between">
      <ThemeProvider attribute="class">
        {/* <Navbar />
        <Component {...pageProps} />
     
        <Footer /> */}

        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

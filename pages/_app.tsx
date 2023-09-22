import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "./Footer";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import "@radix-ui/themes/styles.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen flex-col justify-between">
      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

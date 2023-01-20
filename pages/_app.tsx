import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "./Footer";
import Header from "./Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

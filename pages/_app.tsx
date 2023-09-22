import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";
import { Analytics } from "@vercel/analytics/react";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen flex-col justify-between">
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

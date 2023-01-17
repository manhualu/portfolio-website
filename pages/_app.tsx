import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex">
        <nav>
          <ul>
            <div>
              <li>Manhua</li>
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
            </div>
          </ul>
        </nav>
      </div>
      <Component {...pageProps} />
    </>
  );
}

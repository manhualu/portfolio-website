import { Inter } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import classes from "./index.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex items-center justify-center space-x-20">
      <Head>
        <title>Home</title>
      </Head>
      <div id="text" className="flex flex-col">
        <span className="font text-xl text-indigo-10">
          Hello there <span className={`${classes.wave}`}>👋</span> I am
        </span>
        <span className="text-6xl font-bold">Manhua Lu</span>
        <br></br>
        <span className="text-lg text-gray-10">And I'm running for...</span>
        <span className="text-gray-20 text-lg font-semibold">
          Vice President over the Course Projects 🙂
        </span>
      </div>

      <Image
        src="/manhua2.JPG"
        alt="Manhua"
        width="400"
        height="400"
        className="h-auto rounded-full shadow-lg"
        priority
      ></Image>
    </div>
  );
}

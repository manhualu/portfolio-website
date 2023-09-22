import { Inter } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import classes from "./index.module.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionSection from "@/components/VisionSection";

export default function Home() {
  return (
    <Theme>
      <div>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <hr></hr>
        <VisionSection />
      </div>
      {/* <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col items-center justify-center space-y-10 py-32 m-8 md:flex-row md:space-x-16 md:py-2 md:text-left">
        
        <div id="text" className="">
          <div>
            <span className="font text-xl text-indigo-10">
              Hello there <span className={`${classes.wave}`}>👋</span> I&apos;m
            </span>
            <br></br>
            <span className="text-6xl font-bold">Manhua Lu</span>
            <br></br>
            <span className="sm:text-md text-lg text-gray-10">
              And I&apos;m running for...
            </span>
            <br></br>
            <span className="text-gray-20 sm:text-md text-xl font-semibold">
              Vice President over the Course Projects 🙂
            </span>
          </div>
        </div>

        <div id="image" className="md:mt-2 md:w-1/3">
          <Image
            src="/manhua2.JPG"
            alt="Manhua"
            width="400"
            height="400"
            className="rounded-full shadow-lg"
            priority
          ></Image>
        </div>
      </div> */}
    </Theme>
  );
}

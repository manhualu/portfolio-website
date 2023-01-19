import { Inter } from "@next/font/google";
import Image from "next/image";
import classes from "./index.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="m-20 flex items-center justify-center space-x-40">
      <div id="text" className="flex flex-col">
        <span className="font text-xl text-indigo-10">
          Hello there <span className={`${classes.wave}`}>👋</span> I am
        </span>
        <span className="text-6xl font-bold">Manhua Lu</span>
        <span className="text-md text-gray-10">
          A 3rd year Computer Science and Commerce student
        </span>
      </div>

      <Image
        src="/manhua.jpg"
        alt="Manhua"
        width="500"
        height="500"
        className="h-auto rounded-full shadow-lg"
      ></Image>
    </div>
  );
}

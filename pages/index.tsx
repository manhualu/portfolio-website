import { Inter } from "@next/font/google";
import Image from "next/image";
import classes from "./index.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col px-20 py-20">
      <span className="text-indigo-10">
        Hello there <span className={`${classes.wave}`}>👋</span> I am
      </span>
      <span className="text-xl font-bold">Manhua Lu</span>
      <span className="text-sm text-gray-10">3rd year Computer Science and Commerce university student</span>
      <Image
        src="/manhua.jpg"
        alt="Manhua"
        width="300"
        height="300"
        className="rounded-full"
      ></Image>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-orange-200 px-2 py-2.5">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/frog-chair-dance.gif"
            alt="frog chair dancing"
            width="40"
            height="24"
          />
          <span className="text-xl font-bold">Manhua</span>
        </Link>
        <div className="">
          <ul className="mt-0 flex flex-row space-x-8 p-4 text-md">
            <li>
              <Link href="/">
                <span className="">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/Projects"
                className="text-gray-700 dark:text-gray-400 dark:hover:text-white"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="text-gray-700 dark:text-gray-400 dark:hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="text-gray-700 dark:text-gray-400 dark:hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="px-2 py-2.5 shadow">
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
          <ul className="text-md mt-0 flex flex-row space-x-8 p-4">
            <li>
              <Link href="/">
                <span className="text-gray-700 dark:text-gray-400 dark:hover:text-black">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="Projects"
                className="text-gray-700 dark:text-gray-400 dark:hover:text-black"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="text-gray-700 dark:text-gray-400 dark:hover:text-black"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="text-gray-700 dark:text-gray-400 dark:hover:text-black"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="/Manhua_Lu_Resume_2023.pdf"
                className="px-3 py-3 rounded border-black text-gray-700 dark:text-gray-400 dark:hover:text-black border"
                download
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

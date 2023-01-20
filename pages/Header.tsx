import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as HoverCard from "@radix-ui/react-hover-card";

const Header = () => {
  return (
    <nav className="px-2 py-2.5 shadow">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/frog-chair-dance.gif"
            alt="frog chair dancing"
            width="40"
            height="40"
          />
          <span className="text-xl font-bold">Manhua</span>
        </Link>
        <div className="">
          <ul className="text-md mt-0 flex flex-row space-x-8 p-4">
            <li>
              <Link href="/">
                <span className="text-gray-700 dark:text-gray-400 dark:hover:text-black">
                  Home
                </span>
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
              <HoverCard.Root>
                <HoverCard.Trigger asChild>
                  <a
                    href="/Manhua_Lu_Resume_2023.pdf"
                    className="rounded border border-gray-200 px-3 py-3 text-gray-700 hover:border-black dark:text-gray-400 dark:hover:text-black"
                    download
                  >
                    Resume
                  </a>
                </HoverCard.Trigger>
                <HoverCard.Portal>
                  <HoverCard.Content
                    className="HoverCardContent"
                    sideOffset={5}
                  >
                    <div className="rounded bg-sky-12 p-3 shadow">
                      Download as a PDF : )
                    </div>
                    <HoverCard.Arrow className="HoverCardArrow" />
                  </HoverCard.Content>
                </HoverCard.Portal>
              </HoverCard.Root>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

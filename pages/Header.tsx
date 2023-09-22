import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as HoverCard from "@radix-ui/react-hover-card";
import { Theme } from "@radix-ui/themes";

const Header = () => {
  return (
    <Theme>
      <nav className="p-1 shadow">
        <div className="container mx-auto flex justify-between">
          <Link href="/" className="flex items-center">
            {/* <Image
            src="/frog-chair-dance.gif"
            alt="frog chair dancing"
            width="40"
            height="40"
          /> */}
            <span className="text-xl font-bold">Manhua 🌼</span>
          </Link>
          <div className="">
            <ul className="text-md mt-0 flex flex-row space-x-8 p-4 font-semibold">
              <li>
                <Link href="/" className="text-black hover:text-indigo-10">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/About" className="text-black hover:text-indigo-10">
                  About
                </Link>
              </li>
              {/* <li>
              <Link
                href="Projects"
                className="text-black dark:text-gray-600 dark:hover:text-black"
              >
                Projects
              </Link>
            </li> */}
              <li>
                <Link
                  href="/Vision"
                  className="text-black hover:text-indigo-10"
                >
                  Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/Experience"
                  className="text-black hover:text-indigo-10"
                >
                  Experience
                </Link>
              </li>

              <li>
                <Link
                  href="/Contact"
                  className="text-black hover:text-indigo-10"
                >
                  Contact
                </Link>
              </li>
              {/* <li>
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
            </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </Theme>
  );
};

export default Header;

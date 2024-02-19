import React, { useState } from "react";
import { useTheme } from "next-themes";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { RiSunLine, RiMoonFill } from "react-icons/ri";
import { Link as LinkScroll } from "react-scroll";
import { Theme } from "@radix-ui/themes";
import * as HoverCard from "@radix-ui/react-hover-card";
import * as Popover from "@radix-ui/react-popover";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Experience",
    page: "experience",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  return (
    <Theme>
      <header className="fixed top-0 z-50 mx-auto w-full bg-white px-4 font-mono shadow dark:bg-stone-900">
        <div className="justify-between md:flex md:items-center">
          <div>
            <div className="mx-4 flex items-center justify-between py-3">
              {/* Link to Home page */}
              <LinkScroll
                to={NAV_ITEMS[0].page}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <div className="md:block md:py-5">
                  <span className=" text-xl font-bold">Manhua 🌼</span>
                </div>
              </LinkScroll>
              <div className="md:hidden">
                <button
                  onClick={() => {
                    setNavbar(!navbar);
                  }}
                >
                  {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`mt-2 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <div className="items-center justify-center space-y-6 px-4 text-center md:flex md:space-x-6 md:space-y-0">
                {NAV_ITEMS.map((item, idx) => {
                  return (
                    <LinkScroll
                      key={idx}
                      to={item.page}
                      className="block cursor-pointer border-b md:hover:text-indigo-500 lg:inline-block"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={() => setNavbar(!navbar)}
                    >
                      {item.label}
                    </LinkScroll>
                  );
                })}

                {/* TODO: Add link to Contact section */}
                {/* <div className="block cursor-pointer rounded border p-1.5 md:hover:text-indigo-500 lg:inline-block">
                  Contact
                </div> */}

                <div>
                  <a
                    href="/Manhua_Lu_Resume_2024.pdf"
                    className="block cursor-pointer rounded border p-1.5 md:hover:text-indigo-500 lg:inline-block"
                    download
                  >
                    Resume
                  </a>
                </div>
                {/* <HoverCard.Root>
                  <HoverCard.Trigger asChild>
                    <a
                      href="/Manhua_Lu_Resume_2023.pdf"
                      className="block cursor-pointer border rounded p-1.5 md:hover:text-indigo-500 lg:inline-block"
                      download
                    >
                      Resume
                    </a>
                  </HoverCard.Trigger>
                  <HoverCard.Portal>
                    <HoverCard.Content
                      className=""
                      sideOffset={5}
                    >
                      <div className="rounded p-3 shadow">
                        Download as a PDF : )
                      </div>
                      <HoverCard.Arrow className="HoverCardArrow" />
                    </HoverCard.Content>
                  </HoverCard.Portal>
                </HoverCard.Root> */}

                {currentTheme === "dark" ? (
                  <button
                    onClick={() => setTheme("light")}
                    className="rounded-lg bg-slate-100 p-2 dark:bg-stone-700"
                  >
                    <RiSunLine />
                  </button>
                ) : (
                  <button
                    onClick={() => setTheme("dark")}
                    className="rounded-xl bg-slate-100 p-2"
                  >
                    <RiMoonFill />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </Theme>
  );
};

export default Navbar;

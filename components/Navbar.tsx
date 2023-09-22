import React, { useState } from "react";
import { useTheme } from "next-themes";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { RiSunLine, RiMoonFill } from "react-icons/ri";
import { Link } from "react-scroll";
import { Theme } from "@radix-ui/themes";
import * as HoverCard from "@radix-ui/react-hover-card";

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
    label: "Vision",
    page: "vision",
  },
  {
    label: "Experience",
    page: "experience",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  return (
    <Theme>
      <header className="fixed top-0 z-50 mx-auto w-full bg-white px-4 shadow dark:bg-stone-900">
        <div className="justify-between md:flex md:items-center">
          <div>
            <div className="mx-4 flex items-center justify-between py-3">
              <Link to="home">
                <div className="md:block md:py-5">
                  <span className=" text-xl font-bold">Manhua 🌼</span>
                </div>
              </Link>
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
                    <Link
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
                    </Link>
                  );
                })}
                {/* <HoverCard.Root>
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

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import * as HoverCard from "@radix-ui/react-hover-card";
import { Theme } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import { RiSunLine, RiMoonFill } from "react-icons/ri";
import { IoMdClose, IoMdMenu } from "react-icons/io";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "/",
  },
  {
    label: "About",
    page: "/About",
  },
  {
    label: "Vision",
    page: "/Vision",
  },
  {
    label: "Experience",
    page: "/Experience",
  },
  {
    label: "Contact",
    page: "/Contact",
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
              <div className="md:block md:py-5">
                <span className=" text-xl font-bold">Manhua 🌼</span>
              </div>
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
                      className="block border-b lg:inline-block"
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
      {/* <ul className="h-screen items-center justify-center md:flex md:h-auto ">
                  <li className="border-b-2 border-purple-900 py-2 pb-6 text-center text-xl text-white hover:bg-purple-900  md:border-b-0  md:px-6  md:hover:bg-transparent md:hover:text-purple-600">
                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                      Home
                    </Link>
                  </li>
                  <li className="border-b-2 border-purple-900 py-2 px-6 pb-6 text-center  text-xl text-white  hover:bg-purple-600  md:border-b-0  md:hover:bg-transparent md:hover:text-purple-600">
                    <Link href="/About" onClick={() => setNavbar(!navbar)}>
                      About
                    </Link>
                  </li>
                  <li className="border-b-2 border-purple-900 py-2 px-6 pb-6 text-center  text-xl text-white  hover:bg-purple-600  md:border-b-0  md:hover:bg-transparent md:hover:text-purple-600">
                    <Link href="/Vision" onClick={() => setNavbar(!navbar)}>
                      Vision
                    </Link>
                  </li>
                  <li className="border-b-2 border-purple-900 py-2 px-6 pb-6 text-center  text-xl text-white  hover:bg-purple-600  md:border-b-0  md:hover:bg-transparent md:hover:text-purple-600">
                    <Link href="/Experience" onClick={() => setNavbar(!navbar)}>
                      Experience
                    </Link>
                  </li>
                  <li className="border-b-2 border-purple-900 py-2 px-6 pb-6 text-center  text-xl text-white  hover:bg-purple-600  md:border-b-0  md:hover:bg-transparent md:hover:text-purple-600">
                    <Link href="/Contact" onClick={() => setNavbar(!navbar)}>
                      Contact
                    </Link>
                  </li>
                  <li>
                    {currentTheme === "dark" ? (
                      <button
                        onClick={() => setTheme("light")}
                        className="rounded-xl bg-slate-100 p-2"
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
                  </li>
                </ul> 
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* <header className="fixed top-0 z-50 mx-auto w-full bg-white px-4 shadow dark:border-b dark:border-stone-600 dark:bg-stone-900">
        <div className="justify-between md:flex md:items-center">
          <div>
            <div className="flex items-center justify-between py-3">
              <div className="md:block md:py-5">
                <span className="text-xl font-bold">Manhua 🌼</span>
              </div>
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
              className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 -${
                navbar ? "block p-12 md:p-0" : "hidden"
              }`}
            >
              <div className="items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                {NAV_ITEMS.map((item, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={item.page}
                      className="block lg:inline-block"
                    >
                      {item.label}
                    </Link>
                  );
                })}
                {currentTheme === "dark" ? (
                  <button
                    onClick={() => setTheme("light")}
                    className="rounded-xl bg-slate-100 p-2"
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
      </header> */}
    </Theme>
  );
};

export default Navbar;

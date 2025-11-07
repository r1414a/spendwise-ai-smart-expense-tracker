"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRupeeSign } from "react-icons/fa";

const NAV_LINKS = [
  { name: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="bg-white shadow-md shadow-lightblue border border-lightgray/40  w-full fixed z-50 top-0 start-0 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <div className="flex gap-1 items-center">
              <FaRupeeSign className="text-3xl text-mywhite bg-lightred p-1.5 rounded-full" />
            <span className="font-semibold text-2xl text-gray">
              Spend<span className="text-lightred">Wise</span>
            </span>
          </div>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-mywhite rounded-lg md:hidden hover:bg-mywhite"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-mywhite rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`block py-2 px-3 ${
                    path === link.href
                      ? "text-lightred font-semibold border-b-2 border-tealborder bg-mywhite md:bg-transparent"
                      : "text-gray  hover:text-lightred"
                  }   rounded-sm md:rounded-none  md:p-0 tracking-wide`}
                  aria-current="page"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

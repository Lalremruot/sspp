"use client";

import { useState } from "react";
import {
  LucideArrowDown01,
  LucideArrowUp01,
  LucideChevronDown,
  LucideChevronUp,
  LucideMenu,
  LucideMinusCircle,
  LucideX,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [updateDropDown, setUpdateDropDown] = useState(false);

  const handleNavBar = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdateDropdown = () => {
    setUpdateDropDown(!updateDropDown);
  };

  return (
    <div className="fixed bg-white shadow-sm w-full top-0 flex z-50 items-center justify-between py-1 px-2 lg:px-30">
      <Link href="/" className="flex items-center gap-2 lg:gap-3">
        <Image
          src="/Images/sspp-logo.png"
          alt=""
          width={44}
          height={44}
          priority
          className=" lg:w-18 lg:h-18 cursor-pointer"
        />
        <div className="">
          <h2 className="text-xs lg:text-2xl font-bold text-pink-500">
            SIAMSINPAWLPI
          </h2>
          <p className="lg:space-x-2.5 text-left lg:text-[11px] -mt-3 lg:-mt-2 lg:pb-2 font-medium tracking-normal lg:tracking-widest">
            <span className="text-blue-500 text-[7.5px] lg:text-[10px]">
              SIN IN{" "}
            </span>{" "}
            <span className="text-black text-[7.5px] lg:text-[10px]"> • </span>{" "}
            <span className="text-green-500 text-[7.5px] lg:text-[10px]">
              SEM IN
            </span>
            <span className="text-black text-[7.5px] lg:text-[10px]"> • </span>{" "}
            <span className="text-pink-500 text-[7.5px] lg:text-[10px]">
              ZUUN IN
            </span>
          </p>
        </div>
      </Link>

      <div className="hidden lg:flex items-center text-md gap-6">
        <Link
          href="/"
          className="relative group hover:text-green-600 transition-all ease-in-out duration-300"
        >
          Home
          <span className="absolute left-0 h-[2px] w-0 bottom-0 bg-green-600 transition-all duration-300 group-hover:w-full "></span>
        </Link>
        <Link
          href="/about-us"
          className="relative group hover:text-green-600 transition-all ease-in-out duration-400"
        >
          About Us{" "}
          <span className="absolute left-0 h-[2px] w-0 bottom-0 bg-green-600 transition-all duration-300 group-hover:w-full "></span>
        </Link>
        <Link
          href="/whatwedo"
          className="relative group hover:text-green-600 transition-all ease-in-out duration-400"
        >
          What We Do{" "}
          <span className="absolute left-0 h-[2px] w-0 bottom-0 bg-green-600 transition-all duration-300 group-hover:w-full "></span>
        </Link>
        <Link
          href="/e-tutorial"
          className="relative group hover:text-green-600 transition-all ease-in-out duration-400"
        >
          e-Tutorial{" "}
          <span className="absolute left-0 h-[2px] w-0 bottom-0 bg-green-600 transition-all duration-300 group-hover:w-full "></span>
        </Link>

        <button
          onClick={handleUpdateDropdown}
          className="relative z-50 gap-1 flex items-center group  transition-all ease-in-out duration-400"
        >
          Updates{" "}
          <span className="absolute left-0 h-[2px] w-0 bottom-0 bg-green-600 transition-all duration-300 group-hover:w-full "></span>
          {updateDropDown ? (
            <LucideChevronUp size={18} />
          ) : (
            <LucideChevronDown size={18} />
          )}
          {updateDropDown && (
            <>
              <div
                onClick={() => setUpdateDropDown(false)}
                className="fixed inset-0 h-screen bg-transparent"
              ></div>
              <div className="bg-white shadow-2xl border border-gray-200 rounded-md absolute z-10 top-13 w-52 p-4">
                <div className="flex items-start flex-col gap-3">
                  <Link
                    onClick={() => setUpdateDropDown(false)}
                    className="hover:text-green-600"
                    href="/siamsin-periodicals"
                  >
                    Siamsin Periodicals
                  </Link>
                  <Link
                    onClick={() => setUpdateDropDown(false)}
                    className="hover:text-green-600"
                    href=""
                  >
                    News & Updates
                  </Link>
                  <Link
                    onClick={() => setUpdateDropDown(false)}
                    className="hover:text-green-600"
                    href=""
                  >
                    Photo Gallery
                  </Link>
                  <Link
                    onClick={() => setUpdateDropDown(false)}
                    className="hover:text-green-600"
                    href=""
                  >
                    Video Gallery
                  </Link>
                  {/* <Link className="hover:text-green-600" href="">Siamsin Periodicals</Link> */}
                </div>
              </div>
            </>
          )}
        </button>

        <Link
          href="/contact-us"
          className="bg-pink-600 hover:scale-105 text-white px-4 py-1.5 rounded-sm"
        >
          Contact Us
        </Link>
      </div>
      <div className="lg:hidden">
        <button
          onClick={handleNavBar}
          className={`z-50 relative transition-all ease-in-out duration-300 ${
            isOpen ? "text-gray-800" : "text-gray-700"
          }`}
        >
          {isOpen ? <LucideX /> : <LucideMenu />}
        </button>
      </div>

      {/* Sidebar */}
      <>
        {isOpen && (
          <div
            className="fixed inset-0 transform transition-transform duration-300 bg-black/30"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
        <div
          // onClick={() => setIsOpen(false)}
          className={`absolute top-0 right-0 min-h-screen w-60 bg-white shadow-2xl p-6 transform transition-transform duration-300 ease-in-out lg:hidden
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col gap-4 text-gray-800 pt-8">
            <Link
              onClick={() => setIsOpen(false)}
              href="/"
              className="relative group hover:text-green-600 transition-all ease-in-out duration-300"
            >
              Home
              <span className="absolute left-0 h-[2px] w-0 bottom-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              href="/about-us"
              className="relative group hover:text-green-600 transition-all ease-in-out duration-300"
            >
              About Us
              <span className="absolute left-0 h-[2px] w-0 bottom-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              href="/whatwedo"
              className="relative group hover:text-green-600 transition-all ease-in-out duration-300"
            >
              What We Do
              <span className="absolute left-0 h-[2px] w-0 bottom-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              href="/e-tutorial"
              className="relative group hover:text-green-600 transition-all ease-in-out duration-300"
            >
              e-Tutorial
              <span className="absolute left-0 h-[2px] w-0 bottom-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <button
              onClick={handleUpdateDropdown}
              className="relative z-50 gap-1 flex items-center group  transition-all ease-in-out duration-400"
            >
              Updates{" "}
              <span className="absolute left-0 h-[2px] w-0 bottom-0 bg-green-600 transition-all duration-300 group-hover:w-full "></span>
              {updateDropDown ? (
                <LucideChevronUp size={18} />
              ) : (
                <LucideChevronDown size={18} />
              )}
              {updateDropDown && (
                <div className="bg-white shadow-xl border border-gray-200 absolute top-6 w-52 p-4">
                  <div className="flex items-start flex-col gap-3">
                    <Link
                      onClick={() => setIsOpen(false)}
                      className="hover:text-green-600"
                      href="/siamsin-periodicals"
                    >
                      Siamsin Periodicals
                    </Link>
                    <Link
                      onClick={() => setUpdateDropDown(false)}
                      className="hover:text-green-600"
                      href=""
                    >
                      News & Updates
                    </Link>
                    <Link
                      onClick={() => setUpdateDropDown(false)}
                      className="hover:text-green-600"
                      href=""
                    >
                      Photo Gallery
                    </Link>
                    <Link
                      onClick={() => setUpdateDropDown(false)}
                      className="hover:text-green-600"
                      href=""
                    >
                      Video Gallery
                    </Link>
                    {/* <Link className="hover:text-green-600" href="">Siamsin Periodicals</Link> */}
                  </div>
                </div>
              )}
            </button>
            <div
              onClick={() => setUpdateDropDown(false)}
              className="absolute inset-0 h-screen bg-transparent"
            ></div>
            <Link
              onClick={() => setIsOpen(false)}
              href="/contact-us"
              className="bg-pink-600 hover:scale-105 text-white px-4 py-1.5 rounded-sm transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </>
    </div>
  );
};
export default NavBar;

'use client';
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SearchForm from "./SearchForm";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchSubmit = (query: string) => {
    console.log("Searching for:", query);
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <div className="bg-gray-100 fixed top-0 w-full z-40">
      {/* Desktop Navbar */}
      <div className="hidden sm:flex justify-between items-center px-4 py-2">
        <Image
          src="/logo.png"
          alt="logo"
          width={250}
          height={250}
          className="w-[25vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw] mr-5"
        />
        <SearchForm onSubmit={handleSearchSubmit} />
      </div>

      {/* Mobile Navbar */}
      <div className="flex sm:hidden justify-between items-center px-4 py-2 w-full bg-gray-100 fixed">
        <Image
          src="/logo.png"
          alt="logo"
          width={250}
          height={250}
          className="w-[35vw]"
        />
        <button
          type="button"
          onClick={toggleSearch}
          className="p-2 text-gray-800"
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      {/* Animated Mobile Search Form */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-14 left-0 w-full  bg-gray-100 p-4 shadow-lg z-50"
          >
            <SearchForm onSubmit={handleSearchSubmit} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

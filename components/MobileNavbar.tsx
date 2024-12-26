'use client'
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion for animations

function MobileNavbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <div className="bg-gray-100 flex justify-between items-center px-4 py-2 w-full sm:hidden fixed z-40">
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="logo"
        width={250}
        height={250}
        className="w-[35vw]"
      />

      {/* Search Icon */}
      <button
        type="button"
        onClick={toggleSearch}
        className="p-2 text-gray-800"
      >
        <svg
          className="w-8 h-6\8"
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

      {/* Animated Search Form */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ y: -200, opacity: 0 }} // Animation starts off-screen (above)
            animate={{ y: 0, opacity: 1 }} // Animation slides in
            exit={{ y: -200, opacity: 0 }} // Animation slides out
            transition={{ duration: 0.4, ease: "easeInOut" }} // Timing and easing
            className="absolute top-12 left-0 w-full height-screen bg-gray-100 p-4 shadow-lg z-50 "
          >
            <form
              onSubmit={handleSubmit}
              className="flex items-center space-x-2 "
            >
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow p-2 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
              >
                Search
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 "
          onClick={toggleSearch}
        ></div>
      )}
    </div>
  );
}

export default MobileNavbar;

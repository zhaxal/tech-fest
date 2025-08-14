/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const scrollToElement = useCallback((elementId: string) => {
  //   const element = document.getElementById(elementId);
  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // }, []);

  return (
    <nav className="absolute top-0 left-0 w-full bg-[#0D0D0D] text-white px-2 z-50">
      <div className="container min-h-20 mx-auto flex justify-between items-center">
        <img
          src="/logos/tech_logo.svg"
          alt="Tech Fest Logo"
          className="h-8 md:h-10"
        />

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-20 uppercase text-base">
          <li>
            <Link href="#info" className="hover:underline">
              О фестивале
            </Link>
          </li>
          {/* <li>
            <Link href="/about" className="hover:underline">
              Карта
            </Link>
          </li> */}
          <li>
            <Link href="#events" className="hover:underline">
              соревнования
            </Link>
          </li>
          <li>
            <Link href="#activities" className="hover:underline">
              Активности
            </Link>
          </li>
        </ul>

        {/* Desktop Social Links */}
        <ul className="hidden md:flex space-x-2 items-center">
          <li>
            <Link
              href="https://t.me/moscow_drift"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white bg-opacity-10 hover:bg-opacity-20 hover:scale-110 active:scale-95 rounded-full flex items-center justify-center transition-all duration-200 transform hover:shadow-lg hover:shadow-blue-500/30"
            >
              <svg
                className="w-4 h-4 fill-black hover:fill-blue-400 transition-colors duration-200"
                viewBox="0 0 24 24"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="https://vk.com/mos.drift"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white bg-opacity-10 hover:bg-opacity-20 hover:scale-110 active:scale-95 rounded-full flex items-center justify-center transition-all duration-200 transform hover:shadow-lg hover:shadow-blue-600/30"
            >
              <svg
                className="w-4 h-4 fill-black hover:fill-blue-500 transition-colors duration-200"
                viewBox="0 0 24 24"
              >
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.71-1.033-1.001-1.49-.996-1.701-.996-.346 0-.444.097-.444.574v1.563c0 .422-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.21.097-.405.574-.405h1.744c.428 0 .59.194.756.648.83 2.405 2.229 4.506 2.807 4.506.213 0 .31-.097.31-.632V9.98c-.062-1.438-.84-1.563-.84-2.077 0-.17.135-.34.359-.34h2.744c.359 0 .487.194.487.632v3.473c0 .359.159.487.259.487.213 0 .383-.128.773-.518 1.205-1.315 2.067-3.34 2.067-3.34.118-.248.311-.485.73-.485h1.744c.523 0 .634.27.523.632-.24.749-2.42 4.062-2.42 4.062-.194.31-.259.446 0 .747.194.226 1.116.96 1.394 1.315.757.973.525 1.528.157 1.528z" />
              </svg>
            </Link>
          </li>
          {/* <li>
            <Link
              href="https://www.youtube.com/@mossportonline9438"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white bg-opacity-10 hover:bg-opacity-20 hover:scale-110 active:scale-95 rounded-full flex items-center justify-center transition-all duration-200 transform hover:shadow-lg hover:shadow-red-500/30"
            >
              <svg
                className="w-4 h-4 fill-black hover:fill-red-500 transition-colors duration-200"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>
          </li> */}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md hover:bg-white hover:bg-opacity-10 hover:text-black transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0D0D0D] border-t border-gray-700">
          <div className="container mx-auto px-2 py-4">
            <ul className="space-y-4 uppercase text-base mb-6">
              <li>
                <Link
                  href="/"
                  className="block py-2 hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  О фестивале
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/about"
                  className="block py-2 hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Карта
                </Link>
              </li> */}
              <li>
                <Link
                  href="/events"
                  className="block py-2 hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  соревнования
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Активности
                </Link>
              </li>
            </ul>

            {/* Mobile Social Links */}
            <div className="flex space-x-4 justify-center md:hidden">
              <Link
                href="https://t.me/moscow_drift"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </Link>
              <Link
                href="https://vk.com/mos.drift"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.71-1.033-1.001-1.49-.996-1.701-.996-.346 0-.444.097-.444.574v1.563c0 .422-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.21.097-.405.574-.405h1.744c.428 0 .59.194.756.648.83 2.405 2.229 4.506 2.807 4.506.213 0 .31-.097.31-.632V9.98c-.062-1.438-.84-1.563-.84-2.077 0-.17.135-.34.359-.34h2.744c.359 0 .487.194.487.632v3.473c0 .359.159.487.259.487.213 0 .383-.128.773-.518 1.205-1.315 2.067-3.34 2.067-3.34.118-.248.311-.485.73-.485h1.744c.523 0 .634.27.523.632-.24.749-2.42 4.062-2.42 4.062-.194.31-.259.446 0 .747.194.226 1.116.96 1.394 1.315.757.973.525 1.528.157 1.528z" />
                </svg>
              </Link>
              {/* <Link
                href="https://www.youtube.com/@mossportonline9438"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-5 h-5 fill-black" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link> */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

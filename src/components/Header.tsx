import React, { useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/coffeeLogo.png";

function Header({ productsRef, recipesRef, aboutRef }:any) {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setOpen(!open);
  };

  const scrollToRef = (ref: any) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="absolute px-4 py-4 top-0 w-full z-40">
      <div className="mx auto flex justify-between items-center">
        <div className="flex justify-start items-center mx auto ">
          <h1 className="font-bold text-white text-2xl sm:text-3xl md:text-3xl xl:text-4xl mx-2">
            COFFEE ANTIEKU
          </h1>
        </div>

        <div className="hidden md:flex space-x-5">
          <button
            onClick={() => scrollToRef(productsRef)}
            className="font-mono italic text-xl group text-white font-bold relative hover:text-yellow-800 hover:underline border-r border-white pr-5 focus:outline-none"
          >
            Products
          </button>
          <button
            onClick={() => scrollToRef(recipesRef)}
            className="font-mono italic text-xl group text-white font-bold relative hover:text-yellow-800 hover:underline border-r border-white pr-5 focus:outline-none"
          >
            Recipes
          </button>
          <button
            onClick={() => scrollToRef(aboutRef)}
            className="font-mono italic text-xl group text-white font-bold relative hover:text-yellow-800 hover:underline focus:outline-none"
          >
            About
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex gap-3">
          <button
            className="text-white focus:outline-none"
            onClick={handleMenuOpen}
          >
            <FiMenu size={26} />
          </button>
          <div
            className={`fixed top-16 right-0 left-0 bottom-0 z-10 bg-transparent transition-transform duration-300 ease-in-out transform ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full items-center">
              <button
                onClick={() => {
                  handleMenuOpen();
                  scrollToRef(productsRef);
                }}
                className="font-mono italic text-2xl group text-white font-medium relative hover:text-yellow-800 border-b focus:outline-none"
              >
                Products
              </button>
              <button
                onClick={() => {
                  handleMenuOpen();
                  scrollToRef(recipesRef);
                }}
                className="font-mono italic text-2xl group text-white font-medium relative hover:text-yellow-800 border-b focus:outline-none"
              >
                Recipes
              </button>
              <button
                onClick={() => {
                  handleMenuOpen();
                  scrollToRef(aboutRef);
                }}
                className="font-mono italic text-2xl group text-white font-medium relative hover:text-yellow-800 border-b focus:outline-none"
              >
                About
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header

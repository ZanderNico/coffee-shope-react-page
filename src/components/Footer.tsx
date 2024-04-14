import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <nav className="px-4 py-4 w-full z-40 bg-gray-900">
      <div className="mx auto flex justify-center md:justify-between items-center">
        <h1 className="font-semibold text-white text-xl hidden md:block">
          Follow us for more
        </h1>

        <div className="flex md:flex-row flex-col justify-start items-center space-x-0 md:space-x-5">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-1 font-mono italic text-sm group text-white font-bold relative hover:text-yellow-800 hover:underline"
          >
            <FaFacebook /> anteikucoffeee
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-1 font-mono italic text-sm group text-white font-bold relative hover:text-yellow-800 hover:underline"
          >
            <FaInstagram /> anteikucoffeee12
          </a>
          <a
             href="https://www.twitter.com"
             target="_blank"
             rel="noopener noreferrer"
            className="flex justify-center items-center gap-1 font-mono italic text-sm group text-white font-bold relative hover:text-yellow-800 hover:underline"
          >
            <FaTwitter /> anteikucoffeee5
          </a>
          <p className="flex justify-center items-center gap-1 font-mono italic text-sm group text-white font-bold relative hover:text-yellow-800 hover:underline">
            <FaPhone /> 0945 444 3232
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Footer;

import React, { useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Recipes from "../components/Recipes";
import About from "../components/About";
import Footer from "../components/Footer";
import { FiChevronUp } from 'react-icons/fi';

function ScrollToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className="fixed bottom-10 right-8 bg-yellow-900 text-white rounded-full p-3 shadow-lg hover:bg-yellow-800 focus:outline-none"
      onClick={handleScrollToTop}
    >
      <FiChevronUp size={24} />
    </button>
  );
}

function MainPage() {
  const productsRef = useRef(null);
  const recipesRef = useRef(null);
  const aboutRef = useRef(null);
  return (
    <div>
      <Header
        productsRef={productsRef}
        recipesRef={recipesRef}
        aboutRef={aboutRef}
      />
      <Hero />
      <div ref={productsRef}><Products /></div>
      <div ref={recipesRef}><Recipes /></div>
      <div ref={aboutRef}><About /></div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default MainPage;

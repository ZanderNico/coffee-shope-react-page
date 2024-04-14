import React, { useState } from "react";
import coffeeItem from "../assets/coffee-items/latte-cold.jpg";
import coffeeItem2 from "../assets/coffee-items/latte-hot.jpg";


const sampleCoffeeData = [
  {
    title: "Espresso",
    price: "$3.99",
    desc: "lorem siimmss pp",
    image: coffeeItem,
  },
  {
    title: "Latte",
    price: "$4.49",
    desc: "lorem siimmss pp",
    image: coffeeItem2,
  },
  {
    title: "Cappuccino",
    price: "$4.99",
    desc: "lorem siimmss pp",
    image: coffeeItem,
  },
  {
    title: "Spanish latte",
    price: "$4.99",
    desc: "lorem siimmss pp",
    image: coffeeItem2,
  },
  {
    title: "Affogato",
    price: "$4.99",
    desc: "lorem siimmss pp",
    image: coffeeItem,
  },
  {
    title: "Kape Barako",
    price: "$4.99",
    desc: "lorem siimmss pp",
    image: coffeeItem2,
  },
  {
    title: "Irish Coffee",
    price: "$4.99",
    desc: "lorem siimmss pp",
    image: coffeeItem,
  },
  {
    title: "Mocha",
    price: "$4.99",
    desc: "lorem siimmss pp",
    image: coffeeItem2,
  },
];

function Products() {

  return (
    <div className="flex flex-col bg-gray-300 justify-center items-center py-5">
      <h1 className="text-5xl font-bold mt-20 mb-5">Our Coffee</h1>
      <div className="w-full md:w-[600px] lg:w-[900px]">
        <p className="italic font-mono text-center">
          Savor the delightful essence of tradition in every cup of our coffee.
          Crafted with care and expertise, our brews embody the timeless flavors
          of heritage. From the rich aroma to the satisfying taste, each sip is
          a journey through the heart of tradition, offering a moment of pure
          indulgence and satisfaction.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-20">
        {sampleCoffeeData.map((coffee, index) => (
          <div
            key={index}
            className="overflow-hidden p-5"
          >
            <img
              src={coffee.image}
              alt={coffee.title}
              className="w-56 h-56 object-cover rounded-full"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-center">{coffee.title}</h2>
              <p className="text-gray-700 text-center">{coffee.desc}</p>
              <p className="text-gray-700 text-center">{coffee.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

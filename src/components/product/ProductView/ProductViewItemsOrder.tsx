"use client";
import { SyntheticEvent, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

interface ProductViewItemsOrderProps {
  maxQuantity: number,
}

export const ProductViewItemsOrder = ({ maxQuantity }: ProductViewItemsOrderProps) => {
  const [counter, setCounter] = useState(1);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const handleSubtract = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === 1) return;
    setCounter(counter - 1);
  }

  const handleAdd = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === maxQuantity) return;
    setCounter(counter + 1);
  }

  return (
    <div className="grid grid-cols-[auto,1fr] gap-5 md:gap-20 mt-8">
      <div className="flex items-center space-x-2 bg-gray-300 rounded-md p-2">
        <button onClick={handleSubtract} className="flex justify-center items-center h-8 w-8 text-lg font-bold text-gray-800 bg-transparent border-none cursor-pointer">-</button>
        <p className="text-lg font-normal">{counter}</p>
        <button onClick={handleAdd} className="flex justify-center items-center h-8 w-8 text-lg font-bold text-gray-800 bg-transparent border-none cursor-pointer">+</button>
      </div>
      <form
        className="w-full"
        onSubmit={handleSubmit}
      >
        <button 
        className="w-full h-12 flex items-center justify-center space-x-2 mt-4 px-4 py-2 border-none rounded-md bg-gradient-to-r from-purple-600 to-blue-700 text-white font-bold text-lg cursor-pointer"
         type="submit"
        >
          <FaCartShopping />
          <span>Add to cart</span>
        </button>
      </form>
    </div>
  )
};
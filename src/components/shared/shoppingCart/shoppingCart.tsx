"use client"
import { useShoppingCart } from "app/hooks/useShoppingCart";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { handleCreateCart } from "app/actions";
import { ShoppingCartItem } from "./shoppingCartItem";

export default function ShoppingCart (){
  const { cart } = useShoppingCart();
  const [isBuying, setIsBuying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const hasItems = cart.length > 0;

  const handleOpen = () => {
    if (hasItems) {
      setIsOpen(!isOpen)
    }
  };

  const handleBuy = async () => {
    try {
      setIsBuying(true);
      const checkoutUrl = await handleCreateCart(cart);

      if(!checkoutUrl) throw new Error('Error creating checkout');

      window.localStorage.removeItem('cart');
      window.location.href = checkoutUrl;

    } catch (error) {
      console.log(error);
    } finally {
      setIsBuying(false);
    }
  }
    return (
        <div className="relative">
            <button className="bg-transparent border-none cursor-pointer text-black">
                <FaShoppingCart className="w-8 h-8 fill-current text-white" onClick={handleOpen}/>
                <span className=" w-6 h-6 absolute bottom-6 left-6 text-white bg-red-700 rounded-3xl text-xl items-center">
                    {cart.length}
                </span>
                {isOpen && hasItems && (
                    <div className="absolute bg-gray-800 rounded-lg right-0 max-w-[320px] min-w-[250px] p-4 text-white ">
                        {cart.map((item)=>(
                            <ShoppingCartItem key={item.id} item={item} />
                        ))
                    }
                    <button onClick={handleBuy} disabled={isBuying} className="bg-pink-600 text-text-color w-full mt-2 p-2 rounded-lg border-none font-bold cursor-pointer">Buy</button>
                    </div>
                )}
            </button>
        </div>
    )
}
"use client";
import Image from 'next/image'
import { FaRegTrashCan } from "react-icons/fa6";
import { useShoppingCart } from 'app/hooks/useShoppingCart';


interface ShoppingCartItemProps {
  item: CartItem
}

export const ShoppingCartItem = ({ item }: ShoppingCartItemProps) => {

  const { removeCartItem } = useShoppingCart();

  return (
    <div className='flex flex-row items-center space-x-4'>
      <Image src={item.image} alt={item.title} width={48} height={48} className="grid grid-cols-auto-1rem gap-x-4 w-full items-center" />
      <div>
        <p className='font-bold text-base text-text-color text-left'>{item?.title}</p>
        <span className='w-4 h-4'>x{item?.quantity}</span>
      </div>
      <button onClick={() => removeCartItem(item)} aria-label='trash' className='bg-transparent border-none cursor-pointer text-text-color text-base font-bold text-right p-0 m-0'>
        <FaRegTrashCan className='text-white w-4 h-4' />
      </button>
    </div>
  )
}
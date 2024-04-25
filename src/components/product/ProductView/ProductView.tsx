import Image from "next/image";
import { ProductViewItemsOrder } from "./ProductViewItemsOrder";
import { SanitizeHTML } from "app/components/shared/sanitize-HTML";

interface ProductViewProps {
  product: ProductType
}

export const ProductView = ({ product }: ProductViewProps) => {

  return (
    <main className="max-w-7xl mx-auto grid grid-cols-1fr md:grid-cols-[1fr,450px] gap-20 mt-20">
      <section className="grid justify-self-end">
        <Image
          loading="eager"
          src={product.image}
          width={500}
          height={500}
          quality={80}
          alt={product.title}
          className="rounded-md"
        />
      </section>
      <section className="flex flex-col">
        <h1 className="py-2 px-4 text-lg border-2 border-violet-neon text-pink-neon shadow-text-black rounded-xl mt-2 mb-0">{product.title}</h1>
        <p className="text-2xl font-bold mt-5 mb-2">{product.tags}</p>
        <SanitizeHTML tag="p">
          {product.description}
        </SanitizeHTML>
        <p className="text-lg leading-relaxed my-4">
        </p>
        <span className="text-secondary text-3xl font-bold">
          $ {product.price}
        </span>
        <ProductViewItemsOrder maxQuantity={product.quantity} />
      </section>
    </main>
  )
};
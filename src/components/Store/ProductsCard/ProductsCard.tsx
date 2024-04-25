import Image from "next/image";
import Link from "next/link";

interface ProductCardInterface {
  product: ProductType;
}

export const ProductCard = ({ product }: ProductCardInterface) => {
  return (
    <Link href={`/product/${product.handle}?id=${product.id}`}>
      <article className="flex flex-col relative pt-12">
        <Image
          src={product.image}
          alt={product.title}
          className="w-full h-80 object-cover rounded-lg"
          width={220}
          height={220}
        />
        <div className="p-3 pt-0 rounded-lg">
          <h3>{product.title}</h3>
        </div>
        <span className="bg-red-500 text-white px-2 py-1 absolute top-0 right-0 transform rotate-12 rounded-lg mt-12">
          ${product.price} USD
        </span>
      </article>
    </Link>
  );
};

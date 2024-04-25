import Image from "next/image";
import { getMainProducts } from "app/services/shopify/products";

export const MainProducts = async () => {
    const products = await getMainProducts()

    return (
        <section className="flex flex-col items-center min-h-screen">
            <h3 className="text-white text-2xl mb-4">New Products released!</h3>
            <div className="grid grid-cols-2 gap-4 max-w-screen-lg">
                {products?.map((product:any) => {
                    const imageSrc = product.images[0].src;
                    const imageWidth = 500; 
                    const imageHeight = 500;
                    return (
                        <article key={product.id} className="flex flex-col items-center">
                            <p className="text-white ">{product.title}</p>
                            <Image src={imageSrc} alt={product.title} loading="eager" width={imageWidth} height={imageHeight} className="rounded-lg mb-2"/>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

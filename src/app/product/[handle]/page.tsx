import { ProductView } from "app/components/product/ProductView"
import { getProducts } from "app/services/shopify/products"
import { redirect } from "next/navigation"

export async function generateMetadata( { searchParams }: ProductPageProps) {
  const id = searchParams.id
  const products = await getProducts(id)
  const product = products[0]

  return{
    title: product.title,
    description: product.description,
    keywords: product.tags,
    openGraph:{
      images:[product.image]
    }
  }
}

interface ProductPageProps {
  searchParams: {
    id: string
  }
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id
  const products = await getProducts(id)
  const product = products[0]

  if(!id){
    redirect('/store')
  }

  return <ProductView product={product} />
}
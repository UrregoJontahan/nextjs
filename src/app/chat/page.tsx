import { Chat } from "app/components/chat/chat"
import { getProducts } from "app/services/shopify/products"
import { createAgent } from "app/utils/openai/createAgent"

export default async function ChatPage() {
  const products = await getProducts()
  const productTitles = products.map((product) => product.title)
  const flatProductTitles = productTitles.join("\n")
  const agent = createAgent(flatProductTitles)


  return (
    <>
      <h1 className="flex justify-center text-4xl bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent  leading-none mb-8 font-bold">Chatbot</h1>
      <Chat agent={agent}/>
    </>
  )
}
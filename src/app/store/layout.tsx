import { getCollections } from "app/services/shopify/collections"
import Link from "next/link"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const collections = await getCollections()

  return (
    <main>
      <nav>
        {
          collections.map((collection:any) => (
            <Link key={collection.id} href={'/store/' + collection.handle} className="bg-gradient-to-br from-purple-500 via-purple-600 to-blue-900 rounded-full px-2 m-1 text-white font-bold hover:bg-opacity-90 hover:shadow-lg">
              {collection.title}
            </Link>
          ))
        }
      </nav>
      {children}
    </main>
  )
}
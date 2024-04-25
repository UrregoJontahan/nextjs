import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";

const roboto = Roboto({
  weight: ["100","300","700"],
  subsets: ["latin"]
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-neutral-900 text-white`}>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}

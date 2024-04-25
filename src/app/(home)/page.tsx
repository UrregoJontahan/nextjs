import { MainProducts } from "app/components/Home/MainProducts";
import { Metadata } from "next";

export const metadata: Metadata ={
  title: "Future World",
  description:"welcome to the future world, an ecommerce from other century",
}

export default function Home() {
  return (
    <main>
      <MainProducts/>
    </main>
  );
}

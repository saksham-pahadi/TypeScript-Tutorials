"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-white">
      <button className="bg-blue-500 p-1 rounded" onClick={()=>{router.push("/products/shoes?page=2&sort=price")}}>Go to page</button>
    </div>
  );
}

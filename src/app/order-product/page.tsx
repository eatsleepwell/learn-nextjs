"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const [status, setStatus] = useState(true);
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order...");
    setStatus(false);
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };
  return (
    <>
      <h1>Order Product</h1>
      <button
        onClick={handleClick}
        className="p-2 bg-slate-600 rounded-lg 
        my-2 mx-2 text-slate-100
         hover:bg-slate-700 focus:bg-slate-700"
      >
        {status ? "Place Order" : "Placing..."}
      </button>
    </>
  );
};

export default page;

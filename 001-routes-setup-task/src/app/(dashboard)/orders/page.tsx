import Link from "next/link";
import React from "react";

function Order() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white text-2xl font-bold">Order page</h1>
      <div className="mt-5 flex items-center gap-x-5 justify-center text-blue-800 underline text-xl">
        <Link href="orders/1">Order1</Link>
        <Link href="orders/2">Order2</Link>
        <Link href="orders/3">Order3</Link>
        <Link href="orders/4">Order4</Link>
        <Link href="orders/5">Order5</Link>
      </div>
    </div>
  );
}

export default Order;

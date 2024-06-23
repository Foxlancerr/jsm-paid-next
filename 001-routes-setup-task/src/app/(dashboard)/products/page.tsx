import Link from "next/link";
import React from "react";

function Product() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white text-2xl font-bold">Product page</h1>
      <div className="mt-5 flex items-center gap-x-5 justify-center text-blue-800 underline text-xl">
        <Link href="products/1">Product 1</Link>
        <Link href="products/2">Product 2</Link>
        <Link href="products/3">Product 3</Link>
        <Link href="products/4">Product 4</Link>
        <Link href="products/5">Product 5</Link>
      </div>
    </div>
  );
}

export default Product;

import React from "react";

function ProductId({ params }: { params: { "product-id": string } }) {
  return (
    <div>
      ProductID{" "}
      <span className="font-bold text-xl">{params["product-id"]}</span>
    </div>
  );
}

export default ProductId;

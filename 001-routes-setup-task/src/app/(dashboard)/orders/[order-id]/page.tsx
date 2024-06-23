import Link from "next/link";
import React from "react";

function OrderId({ params }: { params: { "order-id": string } }) {
  return <div>OrderID <span className="font-bold text-xl">{params["order-id"]}</span></div>;
}

export default OrderId;

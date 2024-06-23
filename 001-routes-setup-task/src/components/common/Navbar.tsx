import { Navlinks } from "@/constants";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-12 bg-stone-800 text-white">
      <Link href="/" className="font-bold text-xl">Home</Link>
      <ul className="flex gap-x-3 fon-bold">
        {Navlinks.map((navItem, index) => {
          return (
            <Link href={navItem.path} key={index}>
              {navItem.name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;

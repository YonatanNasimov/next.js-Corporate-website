import { links } from "@/utils/staticData/links";
import Link from "next/link";
import React from "react";



const Navbar = () => {
  return (
    <header>
      <Link href="/">NASIMOV</Link>
      <div>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;

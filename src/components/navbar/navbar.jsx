import Link from "next/link";
import React from "react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "PortFolio",
    url: "/portFolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 3,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <header>
      <Link href="/">NASIMOV</Link>
      <div>
        {links.map(link => {
            <Link key={link.id} href={link.url}>{link.title}</Link>
        })}
      </div>
    </header>
  );
};

export default Navbar;

"use client"
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
        <button
          onClick={() => {
            console.log("Logged Out...") // we will use 'CSR' because here we need some interact we user who use our app/system/website and its a small component, The first rendering is already done (deatails what importent for google scan already done).
          }}
        >
          Log Out
        </button>
      </div>
    </header>
  );
};

export default Navbar;

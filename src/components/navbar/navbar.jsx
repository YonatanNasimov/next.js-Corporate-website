"use client";
import { links } from "@/utils/staticData/links";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.container}>
      <Link href="/" className={styles.logo}>
        NASIMOV
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.single_link}>
            {link.title}
          </Link>
        ))}
        <button
          onClick={() => {
            console.log("Logged Out..."); // we will use 'CSR' because here we need some interact we user who use our app/system/website and its a small component, The first rendering is already done (deatails what importent for google scan already done).
          }}
          className={styles.logout_button}
        >
          Log Out
        </button>
      </div>
    </header>
  );
};

export default Navbar;

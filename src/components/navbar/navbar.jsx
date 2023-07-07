"use client";
import { companyName, links } from "@/utils/staticData/links";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.container}>
      <div>
        <Link href="/" className={styles.logo}>
          {companyName}
        </Link>
      </div>
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
      <div className={styles.burger}>
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
    </header>
  );
};

export default Navbar;

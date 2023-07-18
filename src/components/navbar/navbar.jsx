"use client";
import { companyName, navbarLinks } from "@/utils/staticData/links";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../darkModeToggle/darkModeToggle";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.container}>
      <div>
        <Link href="/" className={styles.logo}>
          {companyName}
        </Link>
      </div>
      <div className={styles.links}>
        <DarkModeToggle />
        {navbarLinks.map((link) => (
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
      {isMobileMenuOpen ? (
        <div className={styles.links_mobile}>
          {navbarLinks.map((link) => (
            <div className={styles.links_mobile_box} key={link.id}>
              <Link href={link.url} className={styles.single_link}>
                {link.title}
              </Link>
              <hr />
            </div>
          ))}
          <div className={styles.dark_mode_box}>
            <button
              onClick={() => {
                console.log("Logged Out..."); // we will use 'CSR' because here we need some interact we user who use our app/system/website and its a small component, The first rendering is already done (deatails what importent for google scan already done).
              }}
              className={styles.logout_button}
            >
              Log Out
            </button>
            <DarkModeToggle />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className={styles.burger} onClick={handleToggleMobileMenu}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
    </header>
  );
};

export default Navbar;

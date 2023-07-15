"use client";
import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { companyName, footerSocialLinks } from "@/utils/staticData/links";

const year = new Date().getFullYear();

const Footer = () => {
  // console.log("Footer") => exmple of SSR, the rendering is loaded in our server, we can see it in the terminal where we run our Next app, when we dont need some interact with the user or anyone who visit our app the HTML renered come from our server to the client side 'ready for use' and google can index the our site in a better way.

  return (
    <footer className={styles.container}>
      <div>
        ©{year} {companyName}. All rights reserved
      </div>
      <div className={styles.social_icons}>
        {footerSocialLinks.map((link) => (
          <Link
            className={styles.image_box}
            title={link.url}
            key={link.id}
            href={link.url}
          >
            <Image
              src={link.src}
              alt={link.alt}
              fill={true}
              className={styles.single_icon}
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import styles from "./paga.module.css";
import Image from "next/image";
import Button from "@/components/button/button";
import { companyName } from "@utils/staticData/links";

export const metadata = {
  title: `Contact Us - ${companyName}`,
  description: "Send us a message",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.image_container}>
          <Image
            alt="contact picture"
            src="/images/contact.png"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Write your name.."
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Write your email.."
          />
          <textarea
            cols={30}
            rows={10}
            placeholder="Write us a message"
            className={styles.textArea}
          ></textarea>
          <Button url="#" text="send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;

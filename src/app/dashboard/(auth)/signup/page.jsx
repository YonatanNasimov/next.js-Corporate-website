"use client";

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Signup = () => {
  return (
    <div className={styles.container}>
      <form>
        <input
          type="text"
          placeholder="Write your Username"
          className={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Write your Email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Write your Password"
          className={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Write your Phone"
          className={styles.input}
          required
        />
        <input
          type="url"
          placeholder="Place an img url"
          className={styles.input}
          required
        />
        <button className={styles.button}>Sign Up</button>
      </form>
      <Link href="/dashboard/login">You already have an account? Login</Link>
    </div>
  );
};

export default Signup;

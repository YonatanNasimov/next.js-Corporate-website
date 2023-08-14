"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { API_SIGN_UP } from "@utils/apiCalls/urls";

const Signup = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const phone = e.target[3].value;
    const imgUrl = e.target[4].value;

    try {
      const res = await fetch(API_SIGN_UP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          phone,
          imgUrl,
        }),
      });
    } catch (error) {
      setErr(true);
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign Up</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
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
      {err && "There Was A Problem, Try Again!"}
      <Link className={styles.link} href="/dashboard/login">
        You already have an account? Login
      </Link>
    </div>
  );
};

export default Signup;

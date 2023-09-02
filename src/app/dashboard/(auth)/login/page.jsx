"use client";

import React from "react";
import styles from "./page.module.css";
import { signIn } from "next-auth/react";

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log("Body_1: " + JSON.stringify({ email, password }));
    signIn("credentials", { email, password });
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign In</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Write your Email"
          className={styles.input}
          defaultValue="user1@gmail.com"
        />
        <input
          type="password"
          placeholder="Write your Password"
          className={styles.input}
          defaultValue="user1"
        />
        <button className={styles.button}>Sign In</button>
      </form>
      <button onClick={() => signIn("google")}>Login With Google</button>
    </div>
  );
};

export default Login;

"use client";

import React from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Spiner from "@components/spiner/spiner";

const Login = () => {
  const session = useSession();

  const router = useRouter();

  if (session.status === "loading") {
    return <Spiner />;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log("Body_1: " + JSON.stringify({ email, password }));
    signIn("credentials", { email, password });
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
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
        <button className={styles.button}>Login</button>
      </form>
      <button className={`${styles.button}  ${styles.google}`} onClick={() => signIn("google")}>Login With Google</button>
    </div>
  );
};

export default Login;

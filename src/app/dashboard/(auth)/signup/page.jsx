"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { API_SIGN_UP } from "@utils/apiCalls/urls";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [err, setErr] = useState(false);

  const [errText, setErrText] = useState(
    "The email or username are already signed up, try again!"
  );

  const router = useRouter();
  //2:32 => video
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const phone = e.target[3].value;
    const imgUrl = e.target[4].value;

    console.log(
      "Body_1: " + JSON.stringify({ username, email, password, phone, imgUrl })
    );

    try {
      const res = await fetch(API_SIGN_UP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          phone,
          imgUrl,
        }),
      });

      console.log(
        "Body_2: " +
          JSON.stringify({ username, email, password, phone, imgUrl })
      );

      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
      //
      res.status === 400 && setErr(true);
      //
    } catch (error) {
      setErr(true);

      console.log(
        "BodyError: " +
          JSON.stringify({ username, email, password, phone, imgUrl })
      );

      console.log(err + error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign Up</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write your username"
          className={styles.input}
          defaultValue="user4"
        />
        <input
          type="email"
          placeholder="Write your Email"
          className={styles.input}
          defaultValue="user4@gmail.com"
        />
        <input
          type="password"
          placeholder="Write your Password"
          className={styles.input}
          defaultValue="user4"
        />
        <input
          type="text"
          placeholder="Write your Phone"
          className={styles.input}
          defaultValue="0547221498"
        />
        <input
          type="url"
          placeholder="Place an img url"
          className={styles.input}
          defaultValue="https://images.pexels.com/photos/18034790/pexels-photo-18034790/free-photo-of-city-coffee-romantic-hotel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <button className={styles.button}>Sign Up</button>
      </form>
      {err && <span style={{ color: "red" }}>{errText}</span>}
      <Link className={styles.link} href="/dashboard/login">
        You already have an account? Login
      </Link>
    </div>
  );
};

export default Signup;

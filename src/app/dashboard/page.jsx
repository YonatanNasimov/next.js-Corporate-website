"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { companyName } from "@utils/staticData/links";

export const metadata = {
  title: `Sign in - ${companyName}`,
  description: "Sign in to our site and share your posts with us",
};

// export const metadata = {
//   title: `Sign up - ${companyName}`,
//   description: "Sign up to our site and you will be one our community",
// };

const Dashboard = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  console.log(data);
  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;

// const [data, setData] = useState([]);
//   const [error, setError] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   const getData = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       setError(true);
//     }

//     const payload = await res.json();

//     setData(payload);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   console.log(data);

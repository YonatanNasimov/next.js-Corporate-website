"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";

export const currentUser = {
  username:"Yonatan Nasimov"
}

export async function generateMetadata({ params }) {
  const user = currentUser;

  return {
    title: `Profile -${user.username}`,
    description: `this is the profile of ${user.username}`,
  };
}

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

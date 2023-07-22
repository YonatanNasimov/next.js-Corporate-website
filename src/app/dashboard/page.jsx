"use client"
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "no-store",
    });

    if (!res.ok) {
      setError(true);
    }

    const payload = await res.json();

    setData(payload);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;

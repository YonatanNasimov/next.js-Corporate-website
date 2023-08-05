"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { companyName } from "@utils/staticData/links";

export const metadata = {
  // check the metadata
  title: `${companyName} - Dashboard`,
  description: "Dashboard page with user information",
};

const Dashboard = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  console.log(data);
  return (
    <div className={styles.container}>
      Dashboard
      
      <div></div>
    </div>
  );
};

export default Dashboard;



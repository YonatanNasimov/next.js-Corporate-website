"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { companyName } from "@utils/staticData/links";
import { useSession } from "next-auth/react";


const Dashboard = () => {
  const session = useSession();
  console.log(session);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  
  return (
    <div className={styles.container}>
      Dashboard
      <div></div>
    </div>
  );
};

export default Dashboard;

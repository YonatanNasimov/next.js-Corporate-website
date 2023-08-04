import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { API_POSTS } from "@utils/apiCalls/urls";

const getData = async () => {
  const res = await fetch(API_POSTS, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  // console.log(res) => we will see it on the terminal window(SSR);
  return res.json();
};

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.main_container}>
      <h1 className={styles.main_title}>See Our Community:</h1>
      {data.map((post) => (
        <Link
          key={post._id}
          href={`/blog/${post._id}`}
          className={styles.container}
        >
          <div className={styles.image_container}>
            <Image
              src={data.imgUrl ? data.imgUrl : "/images/contact.png"}
              alt={post.title}
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;

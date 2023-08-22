import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { companyName } from "@utils/staticData/links";
import { getData } from "@/utils/apiCalls/fetchMethods";
import { API_POSTS } from "@utils/apiCalls/urls";

export const metadata = {
  title: `${companyName} - Our Community`,
  description: "See our what our community sharing",
};

const Blog = async () => {
  const data = await getData(API_POSTS);
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
              src={post.imgUrl ? post.imgUrl : "/images/contact.png"}
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

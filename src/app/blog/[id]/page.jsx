import React from "react";
import styles from "./blogId.module.css";
import Image from "next/image";
import { getSingleData } from "@/utils/apiCalls/fetchMethods";
import { API_POSTS } from "@utils/apiCalls/urls";

export async function generateMetadata({ params }) {
  const post = await getSingleData(API_POSTS, params.id);

  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getSingleData(API_POSTS, params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.user.imgUrl ? data.user.imgUrl : "/images/user.avif"}
              alt={data.title}
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.user}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.imgUrl}
            alt={data.title}
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;

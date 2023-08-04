import React from "react";
import styles from "./blogId.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import { API_POSTS } from "@utils/apiCalls/urls";

const getData = async (id) => {
  const res = await fetch(`${API_POSTS}/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }
  // console.log(res) => we will see it on the terminal window(SSR);
  return res.json();
};

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

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

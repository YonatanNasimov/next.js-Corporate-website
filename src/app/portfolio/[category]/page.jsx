import React from "react";
import styles from "./category.module.css";
import Button from "@/components/button/button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.cat_title}>{params.category}:</h2>
        <div className={styles.item} >
          <div className={styles.content}>
            <h3 className={styles.title}>title</h3>
            <p className={styles.desc}>desc</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.img_container}>
            <Image
              className={styles.img}
              fill={true}
              src="/images/websites.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.item} >
          <div className={styles.content}>
            <h1 className={styles.title}>title</h1>
            <p className={styles.desc}>desc</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.img_container}>
            <Image
              className={styles.img}
              fill={true}
              src="/images/websites.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.item} >
          <div className={styles.content}>
            <h1 className={styles.title}>title</h1>
            <p className={styles.desc}>desc</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.img_container}>
            <Image
              className={styles.img}
              fill={true}
              src="/images/websites.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.item} >
          <div className={styles.content}>
            <h1 className={styles.title}>title</h1>
            <p className={styles.desc}>desc</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.img_container}>
            <Image
              className={styles.img}
              fill={true}
              src="/images/websites.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.item} >
          <div className={styles.content}>
            <h1 className={styles.title}>title</h1>
            <p className={styles.desc}>desc</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.img_container}>
            <Image
              className={styles.img}
              fill={true}
              src="/images/websites.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.item} >
          <div className={styles.content}>
            <h1 className={styles.title}>title</h1>
            <p className={styles.desc}>desc</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.img_container}>
            <Image
              className={styles.img}
              fill={true}
              src="/images/websites.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.item} >
          <div className={styles.content}>
            <h1 className={styles.title}>title</h1>
            <p className={styles.desc}>desc</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.img_container}>
            <Image
              className={styles.img}
              fill={true}
              src="/images/websites.jpg"
              alt=""
            />
          </div>
        </div>
    </div>
  );
};

export default Category;

import React from "react";
import styles from "./category.module.css";
import Button from "@/components/button/button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }
  
  return notFound();
};

export async function generateMetadata({ params }) {
  const category = params.category;

  const data = category;

  return {
    title: data.title,
    description: data.desc,
  };
}

const Category = ({ params }) => {
  const data = getData(params.category);
  console.log(data);
  return (
    <div className={styles.container}>
      <h2 className={styles.cat_title}>{params.category}:</h2>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.img_container}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt={item.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;

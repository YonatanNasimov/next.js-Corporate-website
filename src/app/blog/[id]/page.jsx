import React from "react";
import styles from "./blogId.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem, ipsum dolor.</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            ducimus perferendis laborum unde architecto fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia earum numquam ex commodi, ipsa delectus dolores! Dolores, eligendi voluptates!
          </p>
          <div className={styles.author}>
            <Image
              src="/images/websites.jpg"
              alt={""}
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Lorem, ipsum.</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/websites.jpg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut incidunt
          perspiciatis esse voluptates possimus ipsa velit quis eius architecto,
          ratione fuga perferendis. Culpa magnam, ullam harum ipsa dolor qui,
          nihil velit ea suscipit deleniti ducimus asperiores eaque. Distinctio,
          corporis cum aliquid optio sed recusandae dolore, ducimus voluptate
          corrupti quas nam! Error aliquam consequatur voluptatibus expedita,
          iusto vero doloribus fuga dolorem nesciunt recusandae temporibus ullam
          non sed tenetur culpa! Reprehenderit deleniti, fugit natus atque dicta
          obcaecati adipisci doloremque? Vitae aspernatur eum omnis. Nobis quia
          maxime consectetur nisi aspernatur veniam porro ullam, molestiae
          cupiditate aliquam hic provident iure alias laboriosam eius fuga
          maiores cumque saepe voluptates officia excepturi odit quo sed quod.
          Delectus explicabo libero omnis. A libero voluptates tenetur maxime
          dolore possimus iusto nulla, ullam labore repellendus atque explicabo
          quis, quod quas enim odio consequuntur quae sit, nemo minima deserunt
          quasi! Nostrum reprehenderit culpa odio ullam hic modi voluptate,
          perspiciatis possimus eius? Illum ratione, labore ab doloremque atque
          necessitatibus praesentium blanditiis totam quam. Ut enim tempora illo
          tenetur. Deleniti maiores iure ullam blanditiis ipsam iusto, mollitia
          quisquam officiis aut, nostrum aliquam magnam voluptatem optio labore,
          minima consectetur reiciendis. Cupiditate soluta sapiente est repellat
          doloribus, veniam porro. Ratione deleniti molestias omnis numquam?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt="picture of pepole working"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Welcome to our company, where we specialize in providing top-notch
            web programming services to clients worldwide. With a team of highly
            skilled and experienced programmers, we are committed to delivering
            innovative and custom solutions tailored to meet the unique needs of
            our clients. Our passion for web development shines through in every
            project we undertake.
            <br />
            <br />
            At our company, we understand that a well-designed and fully
            functional website is crucial for businesses to thrive in today's
            digital landscape. That's why we leverage the latest technologies
            and industry best practices to create websites that not only look
            stunning but also deliver exceptional user experiences. Whether you
            need a responsive website, e-commerce platform, or web application,
            we have the expertise to bring your vision to life.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            With a client-centric approach, we prioritize open communication and
            collaboration throughout the development process. We take the time
            to understand your business objectives and target audience to ensure
            that our solutions align with your goals. From initial consultation
            to final delivery, our team works tirelessly to exceed your
            expectations and create web solutions that drive growth and success.
            Partner with us and let's embark on a journey of digital
            transformation together.
          </p>
          <ul>
            <li>expertise</li>
            <li>professionalism</li>
            <li>transparency</li>
          </ul>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;

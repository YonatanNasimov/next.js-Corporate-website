import Image from "next/image";
import styles from "./page.module.css";
import HeroImage from "public/images/hero.png";
import Button from "@/components/button/button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1>Better desgin for your products.</h1>
        <p>
          Turnnig your idea into reality. We bring togther the teams from blobal
          tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.box}>
        <Image
          className={styles.img}
          src={HeroImage}
          alt="picture of pepole working"
        />
      </div>
    </div>
  );
}

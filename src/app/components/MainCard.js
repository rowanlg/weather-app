import React from "react";
import styles from "../styles/mainCard.module.scss";
import Image from "next/image";
import nightPartlyCloudy from "../../../public/night-partly-cloudy.png";

const MainCard = () => {
  return (
    <div className={styles.mainCard}>
      <div className={styles.mainCardSection} id={styles.top}>
        <div className={styles.topLeft}>
          <h3 className={styles.largeText}>Porto Alegre, RS</h3>
          <p>Segunda-feira, 15 de maio de 2023</p>
        </div>
        <div className={styles.topRight}>
          <p className={styles.largeText}>21:39</p>
        </div>
      </div>
      <div className={styles.mainCardSection} id={styles.bottom}>
        <div className={styles.bottomLeft}>
          <h2>28ºc</h2>
          <p>32ºc / 26ºc </p>
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.imageContainer}>
            <Image src={nightPartlyCloudy} alt="Night partly cloudy" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;

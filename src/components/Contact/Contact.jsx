import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:dejesusbil1121@gmail.com">dejesusbil1121@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/bil-de-jesus-220104315">linkedin.com/in/bil-de-jesus</a>
        </li>       
         <li className={styles.link}>
          <img classname="imageContact" src={getImageUrl("contact/phone.png")} alt="phone icon" />
          <a href="https://www.github.com/myname">+63 9988606990</a>
        </li>
      </ul>
    </footer>
  );
};

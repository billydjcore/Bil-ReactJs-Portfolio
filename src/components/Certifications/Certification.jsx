import React from "react";

import styles from "./Certification.module.css";
import skills from "../../data/skills.json";
import certificates from "../../data/certificates.json";
import { getImageUrl } from "../../utils";

export const Certifications = () => {
  return (
    <section className={styles.container} id="certification">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.content}>      
        <ul className={styles.history}>
          {certificates.map((certificateItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>              
                <div className={styles.historyItemDetails}>
                  <h3>{`${certificateItem.Description}`}</h3>
                  <p>{`${certificateItem.Provider}`}</p>                
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

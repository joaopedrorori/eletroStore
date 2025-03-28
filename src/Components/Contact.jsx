import React from "react";
import styles from "./Contact.module.css";
import img from "../img/contact.jpg";
import Head from "./Head";

const Contact = () => {
  return (
    <section className={`${styles.contact} animeLeft`}>
      <Head title="Store | Contact" description="Contact us." />
      <img src={img} alt="black typewriter" />
      <div>
        <h1>Contact us.</h1>
        <ul className={styles.data}>
          <li>joaopedrorr.df@gmail.com</li>
          <li>+55 (61) 90000-0000</li>
          <li>Street Near By, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;

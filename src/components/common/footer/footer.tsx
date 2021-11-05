import { Logo } from "@components/common";
import {
  CATEGORIES_NAV,
  CUSTOM_AREA_NAV,
  NAV_DATA,
  SOCIAL_MEDIA_NAV,
} from "@constants/navData";
import React from "react";

import styles from "./footer.module.css";
import { NavProps } from "./footer.type";

const Nav = ({ title, list, type, ...rest }: NavProps) => {
  return (
    <nav className={styles.nav} data-type={type} {...rest}>
      <h1>{title}</h1>
      <ul>
        {list.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </nav>
  );
};

const footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <Logo />
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste
          illo in, cupiditate quas cumque error quasi saepe quibusdam fugit
          distinctio! Nisi temporibus necessitatibus aperiam. Officiis ipsam
          animi ut quia.
        </p>
      </div>
      <Nav title="Quick Links" type="nav" list={NAV_DATA} />
      <Nav title="Custom Area" type="area" list={CUSTOM_AREA_NAV} />
      <Nav title="Category" type="category" list={CATEGORIES_NAV} />
      <Nav title="Social Media" type="social" list={SOCIAL_MEDIA_NAV} />
      <div className={styles.copyRight}>
        <p>Hello world</p>
      </div>
    </footer>
  );
};

export default footer;

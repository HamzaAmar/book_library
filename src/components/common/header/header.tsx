/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Bag } from "@components/icons";
import { Button } from "@components/core";
import { NAV_DATA } from "@constants/navData";
import Link from "next/link";
import { useUI } from "@context/UIContext";

import { Logo } from "..";

import styles from "./header.module.css";
import { ItemProps } from "./header.type";

function Item({ title, link }: ItemProps) {
  return (
    <li className={styles.item}>
      <Link href={link}>
        <a>{title}</a>
      </Link>
    </li>
  );
}

const Header = () => {
  const { openModal, setModalView } = useUI();

  function openLogin() {
    openModal();
    setModalView("LOGIN_VIEW");
  }

  function openRegister() {
    openModal();
    setModalView("SIGNUP_VIEW");
  }

  return (
    <header className={styles.header}>
      <div className={styles.leftHeader}>
        <Logo />
        <ul className={styles.list}>
          {NAV_DATA.map(({ id, ...rest }) => (
            <Item key={id} {...rest} />
          ))}
        </ul>
      </div>
      <div className={styles.rightHeader}>
        <Button
          style={{ position: "relative" }}
          radius="full"
          variant="icon"
          color="transparent"
        >
          <div className={styles.badge}>01</div>
          <Bag width="15" />
        </Button>
        <Button color="transparent" onClick={openLogin}>
          Sign In
        </Button>
        <Button
          radius="rounded"
          size="medium"
          color="secondary"
          onClick={openRegister}
        >
          Create Account
        </Button>
      </div>
    </header>
  );
};

export default Header;

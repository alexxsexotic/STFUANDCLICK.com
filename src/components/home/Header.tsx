import React from "react";
import styles from "./styles.module.scss";
import { Teamform } from "./Teamform";

export const Header: React.FC = () => {
  return (
    <header className={`${styles.header} flex flex-column al-i-center`}>
      <h2>
        It's really simple
        <br />
        you just need to click as fast as you can.
        <br /> <span>- anonymous</span>
      </h2>
      <Teamform />
    </header>
  );
};

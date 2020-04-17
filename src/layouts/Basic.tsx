import React from "react";
import { Nav } from "../components/layout/Nav";
import { Footer } from "../components/layout/Footer";
import styles from "./styles.module.scss";

export const Basic: React.FC = ({ children }) => {
  return (
    <div className={styles._layout}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

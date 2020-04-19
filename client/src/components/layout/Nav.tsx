import React from 'react';
import styles from './styles.module.scss';

export const Nav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <a className="al-t-center" href="/">
          STFUANDCLICK.COM
        </a>
      </div>
    </nav>
  );
};

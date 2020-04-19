import React from 'react';
import styles from './styles.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className="al-t-center">
        If you don't like this page, it's{' '}
        <a href="https://www.applifting.cz/">Applifting</a>'s fault
      </p>
    </footer>
  );
};

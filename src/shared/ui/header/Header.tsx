import React from 'react';
import { KittenImg } from '../';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1 className={styles.name}>CAT</h1>
          <h2 className={styles.description}>currencies academic terms</h2>
        </div>
        <KittenImg />
      </header>
    </>
  );
};

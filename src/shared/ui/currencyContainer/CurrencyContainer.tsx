import React from 'react';
import { createPortal } from 'react-dom';
import styles from './CurrencyContainer.module.css';

interface ITextBanner {
  text: string;
}
export const TextBanner = ({ text }: ITextBanner) => {
  return createPortal(
    <div className={styles.container}>
      <span className={styles.text}>{text}</span>
    </div>,
    document.querySelector('#portal-root' || 'body')!,
  );
};

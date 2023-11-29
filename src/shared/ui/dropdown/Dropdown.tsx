import React, { useState, useMemo } from 'react';
import classNames from 'classnames';
import { TextBanner, ICurrencyData } from '..';
import { chevron } from '../../assets';
import styles from './Dropdown.module.css';

export const DropdownComponent = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemTitle, setItemTitle] = useState(data[0].currencyName);
  const [selectedItem, setSelectedItem] = useState(data[0].currencyId);

  const onChange = (value: string) => {
    setItemTitle(value);
  };

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue) => {
    setSelectedItem(optionValue.currencyId);
    onChange(optionValue.currencyName);
    setIsOpen(false);
  };

  const itemLabel = useMemo(
    () =>
      selectedItem
        ? data?.find(
            (option: ICurrencyData) => option.currencyId === selectedItem,
          )?.currencyId
        : data[0].currencyId,
    [selectedItem, data],
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.label} onClick={handleToggleOpen}>
        {itemLabel}
        <img className={styles.chevron} src={chevron} />
      </div>
      {isOpen && (
        <div className={styles.options}>
          {data.map((item) => (
            <li
              key={item.currencyId}
              className={classNames(styles.option, {
                [styles.selected]: item.currencyId === selectedItem,
              })}
              onClick={() => handleOptionClick(item)}
            >
              {item.currencyId}
            </li>
          ))}
        </div>
      )}
      {itemTitle && <TextBanner text={itemTitle} />}
    </div>
  );
};

import React from 'react';
import { useGetCurrencyQuery, ICurrencies } from '../../shared';
import { DropdownComponent } from '../../shared/ui';
import styles from './CurrencySelect.module.css';

export interface ICurrencyData {
  currencyId: string;
  currencyName: string;
}

export const CurrencyDropdown = () => {
  const { data, isSuccess, isLoading, isError, error } = useGetCurrencyQuery();

  if (isError) throw error;

  const currencyData: ICurrencyData[] =
    data?.data?.map((item: ICurrencies) => ({
      currencyId: item.id,
      currencyName: item.name,
    })) ?? [];

  return (
    <>
      {isLoading && <span className={styles.loading}>Loading...</span>}
      {isSuccess && <DropdownComponent data={currencyData} />}
    </>
  );
};

export interface ICurrencies {
  id: string;
  name: string;
  min_size: string;
}

export interface ICurrenciesCollection {
  data: ICurrencies[];
}

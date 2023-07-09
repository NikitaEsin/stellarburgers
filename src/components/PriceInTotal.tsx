import React from 'react';
import { FC } from 'react';

interface IPriceInTotal {
  price: any;
}

const PriceInTotal: FC<IPriceInTotal> = ({ price }): any => {
  if (price) {
    const priceInTotal = price.reduce((a: number, b: number) => a + b, 0);
    return <>{priceInTotal}</>;
  }
};

export default PriceInTotal;
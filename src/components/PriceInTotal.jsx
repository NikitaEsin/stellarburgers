import React from 'react';
import PropTypes from 'prop-types';

const PriceInTotal = (props) => {
  if (props.price) {
    const priceInTotal = props.price.reduce((a, b) => a + b, 0);
    return <>{priceInTotal}</>;
  }
};

PriceInTotal.propTypes = {
  price: PropTypes.array,
};

export default PriceInTotal;
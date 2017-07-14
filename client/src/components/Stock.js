import React from 'react';
import PropTypes from 'prop-types';
import '../styles/stock.css';

const Stock = ({ code, description, onClick }) => (
  <div className="stock col-sm-4">
    <p className="stock-code">
      <span>{code}</span>
      <span className="float-sm-right" onClick={onClick}>
        <i className="fa fa-times"></i>
      </span>
    </p>
    <p className="stock-description">
      {description}
    </p>
  </div>
);

Stock.propTypes = {
  code: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Stock;

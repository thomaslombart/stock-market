import React from "react";
import PropTypes from "prop-types";
import "../styles/stock.css";
import styled from "styled-components";

const StockTitle = styled.h2`
  color: blue;
`;

const Stock = ({ code, description, onClick }) => (
  <div className="stock col-sm-4">
    <p className="stock-code">
      <StockTitle>{code}</StockTitle>
      <span>{code}</span>
      <span className="float-sm-right" onClick={onClick}>
        <i className="fa fa-times" />
      </span>
    </p>
    <p className="stock-description">{description}</p>
  </div>
);

Stock.propTypes = {
  code: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Stock;

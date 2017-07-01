import React from 'react';
import '../styles/stock.css';

const Stock = (props) => {
  return (
    <div>
      <h4 className="stock-code">{props.code}</h4>
    </div>
  )
}

export default Stock;

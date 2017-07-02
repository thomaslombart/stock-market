import React, { Component } from 'react';
import Chart from './Chart';
import StockList from './StockList';
import AddStock from './AddStock';

class App extends Component {
  render() {
    return (
      <div>
        <Chart/>
        <StockList/>
        <AddStock/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Chart from '../components/Chart';
import StockList from '../containers/StockList';
import AddStock from '../containers/AddStock';

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

import React, { Component } from 'react';
import StockList from '../containers/StockList';
import AddStock from '../containers/AddStock';

class App extends Component {
  render() {
    return (
      <div>
        <StockList/>
        <AddStock/>
      </div>
    );
  }
}

export default App;

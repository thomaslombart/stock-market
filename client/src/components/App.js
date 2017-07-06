import React, { Component } from 'react';
import Chart from './Chart';
import StockList from './StockList';
import AddStock from './AddStock';
import Footer from './Footer';
import '../styles/app.css';


class App extends Component {
  render() {
    return (
      <div className="main container">
        <h1 className="title">Watch the stocks</h1>
        <Chart/>
        <StockList/>
        <AddStock/>
        <Footer/>
      </div>
    );
  }
}

export default App;

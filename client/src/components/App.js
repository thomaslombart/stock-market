import React, { Component } from 'react';
import Chart from './Chart';
import StockList from './StockList';
import AddStock from './AddStock';
import Footer from './Footer';
import '../styles/app.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {pieData: [{name: "Firefox",y: 6},{name: "MSIE",y: 4},{name: "Safari",y: 4},{name: "Opera",y: 1},{name: "Chrome",y: 7}]}
  }
  render() {
    return (
      <div className="main">
        <h1 className="title">Watch the stocks</h1>
        <Chart data={this.state.pieData}/>
        <StockList/>
        <AddStock/>
        <Footer/>
      </div>
    );
  }
}

export default App;

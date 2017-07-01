import React, {Component} from 'react';

const ReactHighstock = require('react-highcharts/ReactHighstock');

const config = {
  rangeSelector: {
    selected: 1
  },
  title: {
    text: 'AAPL Stock Price'
  },
  series: [
    {
      name: 'AAPL',
      data: 'data',
      tooltip: {
        valueDecimals: 2
      }
    }
  ]
};

class Chart extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>Chart</div>
    )
  }
}

export default Chart;

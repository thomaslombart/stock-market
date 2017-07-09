import React, {Component} from 'react';
import {connect} from 'react-redux';
import theme from '../utils/highchartsTheme';

const ReactHighstock = require('react-highcharts/ReactHighstock');

class Chart extends Component {
  render() {
    // Set the series that will be used in the config
    const series = this.props.stocks.map(serie => {
      return {'data': serie.data, 'name': serie.code}
    });
    theme.series = series;
    // Render Chart only when data is available
    if (this.props.stocks.length !== 0) {
      return <ReactHighstock config={theme} ref="chart"></ReactHighstock>
    } else {
      return <div></div>
    }
  }
}

const mapStateToProps = state => ({stocks: state.stocks});

const ChartContainer = connect(mapStateToProps)(Chart);

export default ChartContainer;

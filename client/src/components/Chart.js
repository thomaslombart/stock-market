import React, {Component} from 'react';
import {connect} from 'react-redux';

const ReactHighstock = require('react-highcharts/ReactHighstock');

class Chart extends Component {
  render() {
    console.log(this.props.stocks)
    /*
    return <ReactHighstock config={config} ref="chart"></ReactHighstock>
    */
    return <div>hey</div>
  }
}

const mapStateToProps = state => ({stocks: state});

const ChartContainer = connect(mapStateToProps)(Chart);

export default ChartContainer;

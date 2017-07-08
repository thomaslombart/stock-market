import React, {Component} from 'react';
import {connect} from 'react-redux';

const ReactHighstock = require('react-highcharts/ReactHighstock');

class Chart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Set the series that will be used in the config
    const series = this.props.stocks.map(serie => {
      return {'data': serie.data, 'name': serie.code}
    });
    const config = {
      rangeSelector: {
        selected: 4
      },
      series: series,
      tooltip: {
        valueDecimals: 2
      },
      plotOptions: {
        series: {
          compare: 'percent',
          showInNavigator: true
        }
      }
    };
    // Render Chart only when data is available
    if (this.props.stocks.length !== 0) {
      return <ReactHighstock config={config} ref="chart"></ReactHighstock>
    } else {
      return <div>Oops... There is no data for the chart</div>
    }
  }
}

const mapStateToProps = state => ({stocks: state});

const ChartContainer = connect(mapStateToProps)(Chart);

export default ChartContainer;

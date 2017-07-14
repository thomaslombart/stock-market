import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import configureHighcharts from '../utils/highchartsConfig';

const ReactHighstock = require('react-highcharts/ReactHighstock');

class Chart extends Component {
  render() {
    // Set the series that will be used in the config
    const series = this.props.stocks.map(serie => {
      return { 'data': serie.data, 'name': serie.code }
    });
    const config = configureHighcharts(series);
    // Render Chart only when data is available
    if (this.props.stocks.length !== 0) {
      return <ReactHighstock config={config} ref="chart"></ReactHighstock>
    } else {
      return <div></div>
    }
  }
}

Chart.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired
  }))
};

const mapStateToProps = state => ({ stocks: state.stocks });

Chart = connect(mapStateToProps)(Chart);

export default Chart;

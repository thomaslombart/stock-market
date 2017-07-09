import React, {Component} from 'react';
import Loading from './Loading';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {loadDetailedStock} from '../actions/stock';
import {connect} from 'react-redux';
import config from '../utils/highchartsDetailTheme';
import '../styles/detail.css';

const ReactHighstock = require('react-highcharts/ReactHighstock');

class Detail extends Component {
  componentDidMount() {
    this.props.loadDetailedStock(this.props.match.params.stock);
  }

  render() {
    const groupingUnits = [
      [
        'week', // unit name
        [1] // allowed multiples
      ],
      [
        'month',
        [1, 2, 3, 4, 6]
      ]
    ];
    const series = [
      {
        type: 'candlestick',
        name: this.props.match.params.stock,
        data: this.props.notification.ohlc,
        dataGrouping: {
          units: groupingUnits
        }
      }, {
        type: 'column',
        name: 'Volume',
        data: this.props.notification.volume,
        yAxis: 1,
        dataGrouping: {
          units: groupingUnits
        }
      }
    ];
    config.series = series;
    return (
      <div className="container">
        <h1 className="detail-title text-sm-center">{`${this.props.match.params.stock} Stock Price`}
        </h1>
        <Loading/>
        <div className="row">
          {this.props.notification.ohlc && (
            <div className="col-sm-12">
              <ReactHighstock config={config} ref="chart"></ReactHighstock>
            </div>
          )}
          {this.props.notification.message && (
            <div className="col-sm-12">
              <h1 className="message text-sm-center">{this.props.notification.message}</h1>
            </div>
          )}
          <div className="col-sm-12">
            <p className="text-sm-center">
              <Link to="/">
                <i className="fa fa-2x fa-home" aria-hidden="true"></i>
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({notification: state.notification});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadDetailedStock
}, dispatch);

const DetailContainer = connect(mapStateToProps, mapDispatchToProps)(Detail);

export default DetailContainer;

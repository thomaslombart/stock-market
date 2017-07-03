import React, {Component} from 'react';
import Stock from './Stock';
import {removeStock, loadStocks} from '../actions/stock';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class StockList extends Component {
  componentDidMount() {
    this.props.loadStocks();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.stocks.map(stock => <Stock key={stock.id} code={stock.code}/>)}
          {this.props.stocks.length === 0 && <p>No Stocks!</p>}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({stocks: state});
const mapDispatchToProps = dispatch => bindActionCreators({loadStocks}, dispatch);

const StockListContainer = connect(mapStateToProps, mapDispatchToProps)(StockList);

export default StockListContainer;

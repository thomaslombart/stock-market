import React, {Component} from 'react';
import Stock from '../components/Stock';
import {removeStock} from '../actions/stock';
import {connect} from 'react-redux';

class StockList extends Component {
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

const StockListContainer = connect(mapStateToProps)(StockList);

export default StockListContainer;

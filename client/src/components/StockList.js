import React, {Component} from 'react';
import Stock from './Stock';
import {connect} from 'react-redux';

class StockList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.stocks.map((stock, i) => <Stock key={i} id={stock.id} code={stock.code}/>)}
          {this.props.stocks.length === 0 && <p>No Stocks!</p>}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({stocks: state});

const StockListContainer = connect(mapStateToProps)(StockList);

export default StockListContainer;

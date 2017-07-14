import React, { Component } from 'react';
import Stock from './Stock';
import { removeStock } from '../actions/stock';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../styles/stocklist.css';

class StockList extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleRemoveClick(id) {
    this.props.removeStock(id);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row stock-list">
          {this.props.stocks.map(stock => <Stock key={stock.id} code={stock.code} description={stock.description} onClick={() => this.handleRemoveClick(stock.id)} />)}
          {this.props.stocks.length === 0 && <h3 className="col-sm-12 text-sm-center nothing ">No stocks!</h3>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ stocks: state.stocks });
const mapDispatchToProps = dispatch => bindActionCreators({
  removeStock
}, dispatch);

const StockListContainer = connect(mapStateToProps, mapDispatchToProps)(StockList);

export default StockListContainer;

import React, {Component} from 'react';
import {removeStock} from '../actions/stock';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import '../styles/stock.css';

class Stock extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleRemoveClick() {
    this.props.removeStock(this.props.id);
  }

  render() {
    return (
      <div>
        <h4 className="stock-code">{this.props.code}
          <span onClick={this.handleRemoveClick}>
            <i className="fa fa-times"></i>
          </span>
        </h4>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({removeStock}, dispatch);

const StockContainer = connect(null, mapDispatchToProps)(Stock);

export default StockContainer;

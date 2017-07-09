import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
      <div className="stock col-sm-4">
        <p className="stock-code">
          <Link to={`/${this.props.code}`}>
            {this.props.code}
          </Link>
          <span className="float-sm-right" onClick={this.handleRemoveClick}>
            <i className="fa fa-times"></i>
          </span>
        </p>
        <p className="stock-description">
          {this.props.description}
        </p>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  removeStock
}, dispatch);

const StockContainer = connect(null, mapDispatchToProps)(Stock);

export default StockContainer;

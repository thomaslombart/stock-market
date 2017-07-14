import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addStock } from '../actions/stock';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../styles/addstock.css';

class AddStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ''
    }
    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.submitStockCode = this.submitStockCode.bind(this);
  }

  handleCodeChange(e) {
    this.setState({ code: e.target.value.trim() });
  }

  submitStockCode(e) {
    e.preventDefault();
    if (this.state.code !== '') {
      this.setState({ code: '' });
      this.props.addStock(this.state.code);
    }
  }

  render() {
    const hasError = this.props.notification.hasOwnProperty("message");
    return (
      <div className="add-stock-container">
        <div className="input-group">
          <input className="form-control" placeholder="Stock symbol e.g. AAPL" value={this.state.code} onChange={this.handleCodeChange} />
          <span className="input-group-btn">
            <button className="btn btn-primary" onClick={this.submitStockCode}>Add</button>
          </span>
        </div>
        {hasError && <div className="alert alert-danger" role="alert">{this.props.notification.message}</div>}
      </div>
    )
  }
}

AddStock.propTypes = {
  isFetching: PropTypes.bool,
  message: PropTypes.string,
  addStock: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ notification: state.notification });

const mapDispatchToProps = dispatch => bindActionCreators({
  addStock
}, dispatch);

AddStock = connect(mapStateToProps, mapDispatchToProps)(AddStock);

export default AddStock;

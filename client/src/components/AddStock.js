import React, {Component} from 'react';
import {addStock} from '../actions/stock';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import '../styles/addstock.css';

class AddStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ''
    }
    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.submitStockCode = this.submitStockCode.bind(this);
    this.getValidationCodeState = this.getValidationCodeState.bind(this);
  }

  getValidationCodeState() {
    return this.state.code !== '';
  }

  handleCodeChange(event) {
    this.setState({code: event.target.value.trim()});
  }

  submitStockCode(e) {
    e.preventDefault();
    if (this.getValidationCodeState()) {
      this.setState({code: ''});
      this.props.addStock(this.state.code);
    }
  }

  render() {
    return (
      <div className="add-stock-container">
          <div className="input-group">
            <input className="form-control" placeholder="Stock symbol e.g. AAPL" value={this.state.code} onChange={this.handleCodeChange}/>
            <span className="input-group-btn">
              <button className="btn btn-primary" onClick={this.submitStockCode}>Add</button>
            </span>
          </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addStock
}, dispatch);

const AddStockContainer = connect(null, mapDispatchToProps)(AddStock);

export default AddStockContainer;

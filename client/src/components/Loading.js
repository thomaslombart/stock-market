import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/loading.css';

class Loading extends Component {
  render() {
    return (
      <div>
        <i className={"float-sm-right fa fa-cog" + (this.props.notification.isFetching ? " spin" : "")} aria-hidden="true"></i>
      </div>
    )
  }
}

const mapStateToProps = state => ({notification: state.notification});

const LoadingContainer = connect(mapStateToProps)(Loading);

export default LoadingContainer;

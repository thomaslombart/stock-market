import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
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

Loading.propTypes = {
  isFetching: PropTypes.bool,
  message: PropTypes.string
};

const mapStateToProps = state => ({ notification: state.notification });

Loading = connect(mapStateToProps)(Loading);

export default Loading;

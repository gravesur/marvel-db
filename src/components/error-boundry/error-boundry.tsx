import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { dataError } from '../../actions';

import image from './thanos.jpg';

interface ErrorBoundryProps {
  error: any,
  children: any,
  dataError: Function
}

class ErrorBoundry extends Component<ErrorBoundryProps> {
  componentDidCatch() {
    this.props.dataError();
  }

  render() {
    if (this.props.error) {
      return (
        <div className="container my-5">
          <div className="col-md mx-auto text-center mt-5">
            <h3 className="my-5">Something going terribly wrong!</h3>
            <img className="img-fluid" src={image} alt="Thanos"/>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const mapStateToProps = (state: any) => {
  return {
    error: state.error
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({dataError}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundry);
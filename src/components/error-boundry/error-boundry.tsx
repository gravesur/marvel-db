import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from 'redux';

import { dataError } from '../../actions';
import { StoreState } from '../../reducers';

import image from './thanos.jpg';

interface ErrorBoundryProps {
  error: boolean;
  children: any;
  dataError: typeof dataError;
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
            <img className="img-fluid" src={image} alt="Thanos" />
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    error: state.dataError,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ dataError }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundry);

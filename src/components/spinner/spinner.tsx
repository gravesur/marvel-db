import React from 'react';

import './spinner.scss';

const Spinner = () => {
  return(
    <div className="row mb-5">
      <div className="col-md-6 m-auto">
        <div className="ml-5">
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
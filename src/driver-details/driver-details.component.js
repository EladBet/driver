import React, { Component } from 'react';
import { render } from 'react-dom';
import Driver from '../driver/driver.component';
import './driver-details.style.scss';

export default class DriverDetails extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="driver-details">
         <Driver {...driver} />
      </div>
    );
  }
}
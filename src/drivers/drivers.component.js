import React, { Component } from 'react';
import { render } from 'react-dom';
import Driver from '../driver/driver.component';
import Nav from '../navbar/navbar.component';
import './drivers.style.scss';
import { getDrivers } from '../drivers.service.js';


export default class Drivers extends Component {
  constructor() {
    super();
    this.state = {     
      drivers: [],
      loaded: false,
      error: ''     
    };
  }

  componentDidMount() {
    getDrivers()
      .then(response => response.json())
      .then(drivers => {      
        this.setState({
          loaded: true,
          drivers: drivers         
        });
      })
      .catch(error => { this.setState({ loaded: true, error }); })
  }  

  render() {
    return (
      <div className="drivers">
        <Nav />
        <div className="contact-list">
          {!this.state.loaded && <div className="loader">Loading...</div>}
          {this.state.error && <div className="error">Error: {this.state.error.message}</div>}
          {this.state.loaded && !this.state.error && (
            <div className="drivers-container">
              {this.state.drivers.length > 0 ? this.state.drivers.map((driver, index) =>
                <Driver key={index.toString()} {...driver} />
              ) : 'No Available Drivers Found :-('}
            </div>
          )}
        </div>       
      </div>
    );
  }
}
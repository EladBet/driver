import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'mobx-router';
import Driver from '../driver/driver.component';
import views from '../config/views';
import './driver-details.style.scss';

class DriverDetails extends Component {
    render() {
        const { store } = this.props;
        const { router: { params } } = store;

        const driver = store.app.drivers.filter(driver => driver.id === params.id)[0];
        return (
            <div className="driver-details">
                <Link view={views.home} store={store}> Go to Home Page</Link>
                <Driver {...driver} />
            </div>
        )
    }
}

export default inject('store')(observer(DriverDetails));

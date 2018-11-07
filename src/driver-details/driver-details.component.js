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
                {store.app.error && <div className="error">Error: {store.app.error.message}</div>}
                {store.app.loaded && !store.app.error && (
                    <React.Fragment>
                        <Link view={views.home} store={store}> Go to Home Page</Link>
                        <Driver {...driver} />
                    </React.Fragment>
                 )}
            </div>
        )
    }
}

export default inject('store')(observer(DriverDetails));

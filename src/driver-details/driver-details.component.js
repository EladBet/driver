import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Link } from 'mobx-router';
import Driver from '../driver/driver.component';
import views from '../config/views';
import './driver-details.style.scss';

class DriverDetails extends Component {
    render() {
        const { store } = this.props;
        const { router: { params } } = store;

        const driverArr = store.app.drivers.filter(driver => driver.id === params.id);
        if (!driverArr.length) {
            return <div>
                <Link view={views.home} store={store}> Go to Home Page</Link>
                <div>Error 404 Not Found</div>
            </div>;
        }
        const driver = driverArr[0];

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

DriverDetails.propTypes = {
    store: PropTypes.object.isRequired,
};

export default inject('store')(observer(DriverDetails));

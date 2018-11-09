import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Driver from '../driver/driver.component';

import './drivers.style.scss';

class Drivers extends Component {
    render() {
        const { store } = this.props;

        return (
            <div className="drivers">
                <div className="contact-list">
                    {!store.app.loaded && <div className="loader">Loading...</div>}
                    {store.app.error && <div className="error">Error: {store.app.error.message}</div>}
                    {store.app.loaded && !store.app.error && (
                        <div className="drivers-container">
                            {store.app.drivers.length ? store.app.drivers.map(driver =>
                                <Driver key={driver.id} {...driver} />
                            ) : 'No Available Drivers Found :-('}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

Drivers.propTypes = {
    store: PropTypes.object.isRequired
};

export default inject('store')(observer(Drivers));

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
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
                            {store.app.drivers.length > 0 ? store.app.drivers.map((driver, index) =>
                                <Driver key={index.toString()} {...driver} />
                            ) : 'No Available Drivers Found :-('}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default inject('store')(observer(Drivers));

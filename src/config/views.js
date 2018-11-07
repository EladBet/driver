import React from 'react';
//models
import { Route } from 'mobx-router';
//components
import DriverDetails from '../driver-details/driver-details.component';
import Drivers from '../drivers/drivers.component.js'

const views = {
    home: new Route({
        path: '/',
        component: <Drivers />
    }),
    driverDetails: new Route({
        path: '/driver/:id',
        component: <DriverDetails />
    })
};

export default views;

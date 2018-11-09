import React from 'react';
//models
import { Route } from 'mobx-router';
//components
import DriverDetails from '../components/driver-details/driver-details.component';
import Drivers from '../components/drivers/drivers.component.js'

const PUBLIC_URL = process.env.PUBLIC_URL;
console.log('PUBLIC_URL: ', PUBLIC_URL);

const views = {
    home: new Route({
        path: `${process.env.PUBLIC_URL}/`,
        component: <Drivers />
    }),
    driverDetails: new Route({
        path: `${process.env.PUBLIC_URL}/driver/:id`,
        component: <DriverDetails />
    })
};

export default views;

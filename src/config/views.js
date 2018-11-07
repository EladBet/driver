import React from 'react';

//models
import {Route} from 'mobx-router';

//components
import Driver from '../driver/driver.component';
import Drivers from '../drivers/drivers.component.js'

const views = {
  home: new Route({
    path: '/',
    component: <Drivers/>
  }),
  document: new Route({
    path: '/driver/:id',
    component: <Driver/>,
    beforeEnter: (route, params, store) => {
      const userIsLoggedIn = store.app.user;
      if (!userIsLoggedIn) {
        alert('Only logged in users can enter this route!');
        return false;
      }
    },
    onEnter: (route, params) => {
      console.log(`entering document with params`, params);
    }
  })
};

export default views;
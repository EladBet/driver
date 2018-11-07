import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './style.scss';
import { MobxRouter, startRouter } from 'mobx-router';
import { getDrivers } from './drivers.service.js';
import Nav from './navbar/navbar.component';
//mobx
import views from './config/views';
import store from './mobx/store';

startRouter(views, store);

getDrivers()
    .then(drivers => {
        store.app.setDrivers(drivers);
        store.app.setLoaded(true);
    })
    .catch(error => {
        store.app.setError(error);
        store.app.setLoaded(true);
    });

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Nav />
            <MobxRouter />
        </div>
    </Provider>, document.getElementById('root')
);

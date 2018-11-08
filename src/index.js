import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './style.scss';
import { MobxRouter, startRouter } from 'mobx-router';

import Nav from './navbar/navbar.component';
//stores
import views from './config/views';
import store from './stores/store';

startRouter(views, store);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Nav />
            <MobxRouter />
        </div>
    </Provider>, document.getElementById('root')
);

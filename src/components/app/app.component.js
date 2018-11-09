import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { MobxRouter, startRouter } from 'mobx-router';
import Nav from '../navbar/navbar.component';

//stores
import views from '../../config/views';
import store from '../../stores/store';

startRouter(views, store);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Nav />
                    <MobxRouter />
                </div>
            </Provider>
        )
    }
}

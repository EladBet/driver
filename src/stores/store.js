import {RouterStore} from 'mobx-router';
import DriversStore from './drivers-store';

const store = {
    app: new DriversStore(),
    router: new RouterStore()
};

export default store;

import { action, extendObservable } from 'mobx';

class DriverModel {
    constructor(store, data, id) {
        //this.drivers = store;
        this.data = data;
        this.id = id;
        extendObservable(this, {
            isIntersecting: false,
        });
    }

    setIntersecting = action(() => {
        this.isIntersecting = true;
    });
}

export default DriverModel;

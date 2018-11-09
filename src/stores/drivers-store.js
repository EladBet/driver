import { extendObservable } from 'mobx';
import { getDrivers } from '../drivers.service';
import DriverModel from './driver-model';
import { uuid } from '../utils';

class DriversStore {
    constructor() {
        extendObservable(this, {
            drivers: [],
            loaded: false,
            error: '',
        });

        this.loadDrivers();
    }

    createDriverModel(data) {
        const driver = new DriverModel(this, data, uuid());
        this.drivers.push(driver);
    }

    loadDrivers() {
        getDrivers()
            .then(drivers => {
                drivers.forEach(driver => this.createDriverModel(driver));
                this.loaded = true;
            })
            .catch(error => {
                this.loaded = true;
                this.error = error;
            });
    }
}

export default DriversStore;

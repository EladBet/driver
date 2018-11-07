import {extendObservable, action} from 'mobx';

class AppStore {
    constructor() {
        extendObservable(this, {
            drivers: [],
            loaded: false,
            error: '',
        });
    }

    setDrivers = action(drivers => {
        this.drivers = [...drivers];
    });

    setLoaded = action(loaded => {
        this.loaded = loaded;
    });

    setError = action(error => {
        this.error = error;
    });
}

export default AppStore;

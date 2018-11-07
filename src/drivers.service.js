export function getDrivers() {
    return fetch('https://candidate-test.herokuapp.com/contacts')
        .then(response => response.json())
        .then(drivers => {
            drivers.forEach((driver, index) => {
                driver['id'] = index.toString();
            });
            return drivers;
        });
}

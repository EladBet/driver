export function getDrivers() {  
  return fetch('https://candidate-test.herokuapp.com/contacts');
}
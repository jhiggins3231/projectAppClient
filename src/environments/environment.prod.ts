export const environment = {
  production: true
};

export let APIURL = 'http://localhost:3000/';
 
switch (window.location.hostname) {
  case 'localhost:3000':
    APIURL = 'http://localhost:3000'
    break
    default:
      APIURL = 'http://localhost:3000'
}
 
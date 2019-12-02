export const environment = {
  production: true
};

export let APIURL = '';
 
switch (window.location.hostname) {
  case 'jhkres-redbadge-client.herokuapp.com':
    APIURL = 'http://jhkres-redbadge-client.herokuapp.com'
    break
    default:
      APIURL = 'http://localhost:3000'
}
 
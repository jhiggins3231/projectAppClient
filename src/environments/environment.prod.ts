export const environment = {
  production: true
};

export let APIURL = '';
 
switch (window.location.hostname) {
  case 'jke-1150-projects-client.herokuapp.com':
    APIURL = 'https://jke-1150-projects-server.herokuapp.com'
    break;
    default:
      APIURL = 'http://localhost:3000'
}
 
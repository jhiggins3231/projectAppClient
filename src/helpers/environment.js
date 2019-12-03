let APIURL = '';

switch (window.location.hostname) {
    // Local host name of react app
    case 'localhost' || '127.0.0.1' :
        //Local host name of api
        APIURL = 'http://localhost:3000';
        break;
    // Deployed Version of react app
    case 'eas-hike-indy-client.herokuapp.com' :
        // Full URL of deployed API
        APIURL = 'https://eas-hike-indy.herokuapp.com'
}

export default APIURL;
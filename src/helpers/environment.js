let APIURL = '';

switch (window.location.hostname) {
    // Local host name of react app
    case 'localhost' || '127.0.0.1' :
        //Local host name of api
        APIURL = 'http://localhost:3000';
        break;
    // Deployed Version of react app
    case 'jke-1150-projects-client.herokuapp.com' :
        // Full URL of deployed API
        APIURL = 'https://jke-1150-projects-client.herokuapp.com'
}

export default APIURL;
import $ from 'jquery'

const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_HJWil8KzX";
const kinveyAppSecret = "1b9475229764422d88afc2a608b32d2d";

// Creates the authentication header
function makeAuth(type) {
    return type === 'basic'
        ? 'Basic ' + btoa(kinveyAppKey + ':' + kinveyAppSecret)
        : 'Kinvey ' + sessionStorage.getItem('authtoken');
}

// Creates request object to kinvey
function makeRequest(method, modules, endpoint, auth) {
    return {
        method,
        url: kinveyBaseUrl + modules + '/' + kinveyAppKey + '/' + endpoint,
        headers: {
            'Authorization': makeAuth(auth)
        }
    };
}

// Function to return GET promise
function get(modules, endpoint, auth) {
    return $.ajax(makeRequest('GET', modules, endpoint, auth));
}

// Function to return POST promise
function post(modules, endpoint, auth, data) {
    let req = makeRequest('POST', modules, endpoint, auth);
    req.data = data;
    return $.ajax(req);
}

// Function to return PUT promise
function update(modules, endpoint, auth, data) {
    let req = makeRequest('PUT', modules, endpoint, auth);
    req.data = data;
    return $.ajax(req);
}

// Function to return DELETE promise
function remove(modules, endpoint, auth) {
    return $.ajax(makeRequest('DELETE', modules, endpoint, auth));
}

export default {
    get,
    post,
    update,
    remove
}
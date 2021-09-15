import * as Keycloak from 'keycloak-js';

const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ5MnZ0TVVCSG01QnVsSV9iWGs0R0lpNVQtT1NvNnJWWjBrV2FLWlJSOGZFIn0.eyJleHAiOjE2MzE3MjE1NzYsImlhdCI6MTYzMTcyMTI3NiwiYXV0aF90aW1lIjoxNjMxNzE5NDY4LCJqdGkiOiI5OTE3NDM5ZC01MWJjLTRhMjMtYmEwNS02MmU0NDNjM2ViMGUiLCJpc3MiOiJodHRwczovL2xvZ2luLnNjb3V0c2VuZ2lkc2VudmxhYW5kZXJlbi5iZS9hdXRoL3JlYWxtcy9zY291dHMiLCJzdWIiOiI4MmY5ZDFjNy05OGUwLTQ1MGYtYWIyOS0wOTg5Y2IzNmNhY2UiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJncm9lcC1PMTMwNkctSGFlZ2Vwb29ydGVycy1EZXN0ZWxiZXJnZW4iLCJub25jZSI6IjVjMWYzOGUzLTUzZjEtNDA2OS04NTM1LWE5YTI5OTUwYzU4MCIsInNlc3Npb25fc3RhdGUiOiI0M2RjMzA0NS1jYzA1LTRlZTYtYmQ2NS1lYjQwNzE2NjczOGUiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vYmV0YS5oYWVnZXBvb3J0ZXJzLmJlIl0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZ3JvZXBzYWRtaW4tZnVsbC1hY2Nlc3MgZW1haWwiLCJ1cmxzIjoiW3tcIm5hYW1cIjpcIlNjb3V0cyBlbiBHaWRzZW4gVmxhYW5kZXJlblwiLFwidXJsXCI6XCJodHRwczovL3d3dy5zY291dHNlbmdpZHNlbnZsYWFuZGVyZW4uYmVcIn0se1wibmFhbVwiOlwiSG9wcGVyXCIsXCJ1cmxcIjpcImh0dHA6Ly93d3cuaG9wcGVyLmJlXCJ9LHtcIm5hYW1cIjpcIkdyb2Vwc2FkbWluaXN0cmF0aWVcIixcInVybFwiOlwiaHR0cHM6Ly9ncm9lcHNhZG1pbi5zY291dHNlbmdpZHNlbnZsYWFuZGVyZW4uYmUvZ3JvZXBzYWRtaW5cIn0se1wibmFhbVwiOlwiLk9yZ1wiLFwidXJsXCI6XCJodHRwczovL3d3dy5zY291dHNlbmdpZHNlbnZsYWFuZGVyZW4ub3JnXCJ9LHtcIm5hYW1cIjpcIk9ua29zdGVuXCIsXCJ1cmxcIjpcImh0dHBzOi8vb25rb3N0ZW4uc2NvdXRzZW5naWRzZW52bGFhbmRlcmVuLm9yZ1wifSx7XCJuYWFtXCI6XCJWYWNhdHVyZXNcIixcInVybFwiOlwiaHR0cHM6Ly92YWNhdHVyZS5zY291dHNlbmdpZHNlbnZsYWFuZGVyZW4uYmVcIn0se1wibmFhbVwiOlwiRXZlbmVtZW50ZW5cIixcInVybFwiOlwiaHR0cHM6Ly93d3cuc2NvdXRzZW5naWRzZW52bGFhbmRlcmVuLmJlL2V2ZW5lbWVudGVuXCJ9XSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwia2xhbnRudW1tZXIiOiJJMTgxOTEiLCJuYW1lIjoiTGVubmVydCBEZSBSeWNrIiwicHJlZmVycmVkX3VzZXJuYW1lIjoibGVubmVydGRlcnljayIsImdpdmVuX25hbWUiOiJMZW5uZXJ0IiwiZmFtaWx5X25hbWUiOiJEZSBSeWNrIiwiZW1haWwiOiJsZW5ueWRlcnlja0BnbWFpbC5jb20iLCJrbGFudHByaWpzZ3JvZXAiOiJHUk9FUCJ9.apqhTIUdqFFf4IDZrR4GtDvB-Y4fMccOgu3DislD_a8wjW5zCPfjdNR6PIvXy-OGIxTiJ7l5RzFdmWohFD9c9II2J8jGAi6obhDXxi4FYG2MrFBKAiC_V8kelsylbIWaL6AwX4l48JJvagL9kmlzKFH3r2pz2qPsmR4P8sP0-ttH0CK1E2p0iyAeFQJ8ZevgsfVOyeZZWWboK2qKqbAmxoGyW_EDS4ujKA31cnYQ6ewURn8_ONZagawdBf2HACUsx5pzrPRCnf_JhQv-ZYXnZjmyHwwOcitn_v8YsmO5u58DfvhJH2B-IiuTn7zLUmbzixZUgJhiywgnZbYEOJ7mwg'


const config = {
    url: 'https://login.scoutsengidsenvlaanderen.be/auth',
    realm: 'scouts',
    clientId: 'groep-O1306G-Haegepoorters-Destelbergen',
    redirectUri: window.location.href
}

const initOptions = {
    onLoad: 'login-required',
    token
}

const _keycl = new Keycloak(config);

const initKeycloak = (callback) => {
    _keycl
        .init(initOptions)
        .then(callback)
}

const login = _keycl.login

const logout = _keycl.logout

const getToken = () => _keycl.token

const isLoggedIn = () => !!_keycl.token

const updateToken = (callback) => {
    _keycl
        .updateToken(5)
        .then(callback)
        .catch(login);
}

const getProfile = () => {
    return _keycl
        .loadUserProfile()
}

export default _keycl
export {
    _keycl,
    initKeycloak,
    login,
    logout,
    getToken,
    isLoggedIn,
    updateToken,
    getProfile
}
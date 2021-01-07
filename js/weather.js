"use strict"

mapboxgl.accessToken = mapboxToken;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-79.05588851153787, 35.91385037535829],
    zoom: 11,

});

let lngLat = {
    lat: 35.91385037535829,
    lng:-79.05588851153787
};



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

let marker = new mapboxgl.Marker({
    draggable: true
})

marker.setLngLat([-79.05588851153787, 35.91385037535829]).addTo(map);

//need a function to update weather when marker is dragged



function createCard(data){

    document.getElementById("weatherCards").innerHTML = "";

    data.list.forEach( (day, i)=>{

        if (i % 8 === 0) {

            let card = document.createElement("div");
            card.setAttribute("class","flex-column card m-2 p-0");
            card.setAttribute("style","min-width:12em");

            let hr = [];
            hr.push(document.createElement("hr"));
            hr.push(document.createElement("hr"));
            hr.push(document.createElement("hr"));

            //starts header
            let header = document.createElement("div");
            header.setAttribute("class","card-header text-center font-weight-bold");
            let date = new Date();
            date.setTime(day.dt * 1000);
            header.innerHTML = date.toLocaleDateString();

            //starts body
            let body = document.createElement("div");
            body.setAttribute("class","card-body text-center");

            let temp = document.createElement("div");
            temp.setAttribute("class","temp");
            temp.setAttribute("class","pb-4");
            temp.innerHTML = day.main.temp + "&degF / " + day.main.feels_like + "&degF";

            let icon = document.createElement("img");
            icon.src = "http://openweathermap.org/img/w/" + day.weather[0].icon + ".png";

            let description = document.createElement("div");
            description.setAttribute("class","description pb-4");
            description.innerHTML = day.weather[0].description;

            let humidity = document.createElement("div");
            humidity.setAttribute("class","humidity");
            humidity.innerHTML = day.main.humidity;

            let wind = document.createElement("div");
            wind.setAttribute("class","wind");
            wind.innerHTML = day.wind.speed + " MPH";

            let pressure = document.createElement("div");
            pressure.setAttribute("class","pressure");
            pressure.innerHTML =  day.main.pressure;

            body.appendChild(temp);
            body.appendChild(icon);
            body.appendChild(hr[0]);
            body.appendChild(description);
            body.appendChild(humidity);
            body.appendChild(hr[1]);
            body.appendChild(wind);
            body.appendChild(hr[2]);
            body.appendChild(pressure);

            //add to document
            card.appendChild(header);
            card.appendChild(body);

            document.getElementById("weatherCards").appendChild(card);
        }
    })
}


function getLocation(search) {

    let weatherOptions = {
        "APPID": weatherKey,
        "q": `${search ? search : 'Chapel Hill'}`,
        "lat": `${lngLat.lat}`,
        "lon": `${lngLat.lng}`,
        "units": "imperial"
    }


    $.get("http://api.openweathermap.org/data/2.5/forecast", weatherOptions).done(function (data) {
        let coords = {
            lon: data.city.coord.lon,
            lat: data.city.coord.lat
        }
        marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat([coords.lon, coords.lat])
            .addTo(map);
        map.flyTo({
            center: [
                coords.lon,
                coords.lat
            ],
            essential: true
        })
    })


}
$('#citySearch').click(function(e){
    e.preventDefault();
    getLocation($('#cityName').val());
})




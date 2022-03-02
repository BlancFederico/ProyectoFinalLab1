let data = document.getElementById("data");
let Latitude;
let Longitude;
let key = "ef92bcb9120577e3ac2a42734727b2a0";
let url = "http://api.openweathermap.org/data/2.5/weather?";
  
// Function to get the latitude and longitude data
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        data_of_Lat_Lon.innerHTML = 
            "Geolocation is not supported by this browser";
    }
}
  
// Function to fetch the Latitude and Longitude
// from position data
function showPosition(position) {
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
  
    getData(Latitude, Longitude);
}
  
// Fetching the data and calling the API
function getData(Lat, Lon) {
    const readyToSent = (url + "lat=" + Lat 
        + "&lon=" + Lon + "&appid=" + key);
    fetch(readyToSent)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            fetchData(data)
        })
}
  
// Fetching the JSON file and printing it to 
// the paragraph which is called by ID data
function fetchData(data) {
    const icon = "http://openweathermap.org/img/wn/"
        + data.weather[0].icon + "@2x.png"
  
    document.getElementById("data").innerHTML =
        "<b>El clima en su localizacion es:"
            + "</b><br> <img src=" + icon + "><br>"
            + "<b>Pais :</b>" + data.sys.country 
            + "<br><b>Ciudad</b>" 
            + data.name + "<br><b>Temperatura :</b>" 
            + parseFloat((data.main.temp - 273.15))
            .toFixed(1) + "℃" + 
            "<br><b>Sensacion Termica :</b>" 
            + parseFloat((data.main.feels_like - 
                273.15)).toFixed(1) + "℃" 
            + "<br><b>Humedad :</b>" 
            + data.main.humidity + "%" 
}
  
// Function call
getLocation();
showPosition();
getData();

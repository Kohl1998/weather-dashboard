var APIKey = 'e0100e72c6cd3ae4f47ceb4b504c906d';
var cityName = "Birmingham";
var numberofDays = 40;
var searchButton = $('#search-button');
var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + APIKey + '&cnt=' + numberofDays;
var date = $('#date');
var temp = $('#temp');
var wind = $('#wind');
var humidity = $('#humidity');

// Create var with moment js to update time 

function getWeatherForecast() {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        // Temparature for 18:00 
        // Declare variable within scope
        var temp = $('#temp').text(response.list[0].main.temp)
    });
}
getWeatherForecast();


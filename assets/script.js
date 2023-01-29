var APIKey = 'e0100e72c6cd3ae4f47ceb4b504c906d';
var cityName = "Birmingham";
var numberofDays = 40;
var searchButton = $('#search-button');
var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + APIKey + '&cnt=' + numberofDays;

function getWeatherForecast() {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
    });
}
getWeatherForecast();


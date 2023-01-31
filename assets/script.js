var date = $('#date');
var temp = $('#temp');
var wind = $('#wind');
var humidity = $('#humidity');
var searchHistory = $('#search-history');
var searchButton = $('#search-button');

// Create var with moment js to update time 
var dateToday = moment().format('MMMM Do YYYY, h:mm:ss a');
var jumbotronDate = $('#date').text(moment().format('MMMM Do YYYY'));

// Event listener for search button 
$(searchButton).on('click', function (e) {
    var APIKey = 'e0100e72c6cd3ae4f47ceb4b504c906d';
    // Reads user form input
    var cityName = $('#search-input').val();
    // days requested
    var numberofDays = 40;
    var queryURL = 'https://api.openweathermap.org/data/2.5/forecast/?q=' + cityName + '&appid=' + APIKey + '&cnt=' + numberofDays;
    e.preventDefault();
    console.log(cityName);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        // List of objects within JSON response
        for (var i = 0; i < response.list.length; i++) {
            var dateplusTime = response.list[i].dt_txt;
            // Extracts next 5 days from object using index
            var year = dateplusTime.slice(0, 4);
            var month = dateplusTime.slice(5, 7);
            var day = dateplusTime.slice(8, 10);
            // To format date
            var date = day + "/" + month + "/" + year;
            // To append weather icons to bootstrap cards
            var iconURL = "http://openweathermap.org/img/wn/" + iconCode + ".png"
            // To get icon code of first element
            var iconCode = response.list[0].weather[0].icon
            var weatherIcon = $('.weather-icon').attr('src', iconURL)
            console.log(response.list[0].weather[0].id)
            
            // To render the search city to card title
            var jumbotronCity = $('.card-city').text(" " + response.city.name)
            // To access the first index [0]
            var jumbotronTemp = $('#temp').text(" " + (response.list[0].main.temp - 273.15).toFixed(2) + "°C")
            var jumbotronWind = $('#wind').text(" " + response.list[0].wind.speed + "mph")
            var jumbotronHumidity = $('#humidity').text(" " + response.list[0].main.humidity + "%")
            var searchHistory = $('#search-history')
            
            // Displays cities searched to buttons + adds bootstrap class color of blue
            var buttonHistory = $('<button>').text(cityName).addClass('btn-primary')
            $('ul').append(buttonHistory);
            
            // Card content 1
            var cardTime = $('#card1-time').text(" " + response.list[0].dt_txt)
            // substracting 273.15 from temperature within object returns kelvin
            var cardTemp = $('#card1-temp').text(" " + (response.list[0].main.temp - 273.15).toFixed(2) + "°C")
            var cardWind = $('#card1-wind').text(" " + response.list[0].wind.speed + "mph")
            var cardHumidity = $('#card1-humidity').text(" " + response.list[0].main.humidity + "%")

            // card content 2
            var cardTime = $('#card2-time').text(" " + response.list[10].dt_txt)
            var cardTemp = $('#card2-temp').text(" " + (response.list[10].main.temp - 273.15).toFixed(2) + "°C")
            var cardWind = $('#card2-wind').text(" " + response.list[10].wind.speed + "mph")
            var cardHumidity = $('#card2-humidity').text(" " + response.list[10].main.humidity + "%")

            // card content 3
            var cardTime = $('#card3-time').text(" " + response.list[20].dt_txt)
            var cardTemp = $('#card3-temp').text(" " + (response.list[20].main.temp - 273.15).toFixed(2) + "°C")
            var cardWind = $('#card3-wind').text(" " + response.list[20].wind.speed + "mph")
            var cardHumidity = $('#card3-humidity').text(" " + response.list[20].main.humidity + "%")

            // card content 4
            var cardTime = $('#card4-time').text(" " + response.list[30].dt_txt)
            var cardTemp = $('#card4-temp').text(" " + (response.list[30].main.temp - 273.15).toFixed(2) + "°C")
            var cardWind = $('#card4-wind').text(" " + response.list[30].wind.speed + "mph")
            var cardHumidity = $('#card4-humidity').text(" " + response.list[30].main.humidity + "%")

            // card content 5
            var cardTime = $('#card5-time').text(" " + response.list[39].dt_txt)
            var cardTemp = $('#card5-temp').text(" " + (response.list[39].main.temp - 273.15).toFixed(2) + "°C")
            var cardWind = $('#card5-wind').text(" " + response.list[39].wind.speed + "mph")
            var cardHumidity = $('#card5-humidity').text(" " + response.list[39].main.humidity + "%")
            
            // Local storage to store user's information
            localStorage.setItem("searchHistory", cityName)
            console.log(localStorage.getItem("searchHistory"))
        }
        // Declare variable within scope
    });
}) 
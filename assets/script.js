var date = $('#date');
var temp = $('#temp');
var wind = $('#wind');
var humidity = $('#humidity');
var searchHistory = $('#search-history');
var searchButton = $('#search-button');

// Create var with moment js to update time 

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
            var dateAndTime = response.list[i].dt_txt;
            // Extracts next 5 days from object using index
            var year = dateAndTime.slice(0, 4);
            var month = dateAndTime.slice(5, 7);
            var day = dateAndTime.slice(8, 10);
            // To format date
            var date = day + "/" + month + "/" + year;
            console.log("date:" + date);
        }
        // Declare variable within scope
    });
}) 
$(document).ready(function() {
    
    var apiUrlAL = "https://api.open-meteo.com/v1/forecast?latitude=34.7304&longitude=-86.5861&hourly=temperature_2m";

    $.ajax({
        url: apiUrlAL,
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            
            displayWeatherData(response);
        },
        error: function() {
            $('#weather').html('<p>An error has occurred</p>');
        }
    });
});

function displayWeatherData(data) {
    var weatherHtml = '<h2>Current Weather</h2>';
    weatherHtml += '<p>Temperature in Huntsville, AL: ' + data.hourly.temperature_2m[0] + ' °C</p>'; 

    $('#weather').html(weatherHtml);
}


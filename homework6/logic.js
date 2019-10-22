var apiKey = e84c468c18a9f7388a0eb7ae72214832;
var cityValue = $("#inputValue").trim().val();
var now = moment().format('MMMM Do, YYYY');


$("#searchButton").on("click", function() {
    var queryURL = "https://.openweathermap.org/data/2.5/weather?q=" + cityValue + "&apikey=" + apiKey;
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            $("#cityName").text(response.name + " " + now);
            $("#temp").text("Temperature: " + response.main.temp + " F");
            $("#humidity").text("Humidity: " + response.main.humidity + " %");
            $("#wind").text("Wind Speed " + response.wind.speed + " MPH");
            $("#searchDiv").prepend(response.name);
        });
});
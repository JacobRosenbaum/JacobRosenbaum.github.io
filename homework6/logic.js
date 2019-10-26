var apiKey = "e84c468c18a9f7388a0eb7ae72214832";

var now = moment().format('MMMM Do, YYYY');

function getWeather() {
    event.preventDefault();
    var cityValue = $("#inputValue").val().trim();
    var queryURL = "http://api.openweathermap.org/data/2.5/find?q=" + cityValue + "&units=imperial&type=accurate&mode=json&APPID=" + apiKey;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        type: "GET",
    }).then(function(response) {
        console.log(response);
        $("#cityName").html("<h1>" + response.list[0].name + " " + now + "</h1>");
        $("#temp").html("<h2>" + "Temperature: " + response.list[1].main.temp + " F" + "</h2>");
        $("#humidity").html("<h2>" + "Humidity: " + response.list[1].main.humidity + " %" + "</h2>");
        $("#wind").html("<h2>" + "Wind Speed " + response.list[2].wind.speed + " MPH" + "</h2>");
        $("#searchDiv").text(response.list[0].name);

        console.log("Temperature: " + response.list[1].main.temp + " F");
        console.log("Humidity: " + response.list[1].humidity + " %");
        console.log("Wind Speed " + response.list[2].wind.speed + " MPH");
        console.log(response.list[0].name);
        localStorage.setItem("city", response.list[0].name);

    });

    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityValue + "&units=imperial&type=accurate&mode=json&APPID=" + apiKey;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        type: "GET",
    }).then(function(response) {
        console.log(response);
        $("#forecast1").empty();
        for (var i = 0; i < 5; i++) {
            console.log(response.list[i].main.temp);
            var newCard = $("<div class='days'>");
            newCard.html(`
            <div> Temperature: ${response.list[i].main.temp}&deg;F </div>
            <div> Humidity: ${response.list[i].main.humidity}% </div>
            `)
            $("#forecast1").append(newCard);

        }
    });
}


$("#searchButton").on("click", function(event) {

    getWeather();


});
$(window).on("load", function() {
    var newCity = localStorage.getItem("city");
    $("#searchDiv").prepend(newCity);
    $("#inputValue").val(newCity);
});
$(newCity).on("click", function() {
    getWeather();
})
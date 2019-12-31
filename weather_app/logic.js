var apiKey = "e84c468c18a9f7388a0eb7ae72214832";

var now = moment().format('MMMM Do, YYYY');
$("#date").text(now);
// $("#date").css("color", "white");

var tomorrow = moment().add(1, 'ddd');


function getWeather() {
    event.preventDefault();
    var cityValue = $("#inputValue").val().trim();
    var queryURL = "https://api.openweathermap.org/data/2.5/find?q=" + cityValue + "&units=imperial&type=accurate&mode=json&APPID=" + apiKey;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        type: "GET",
    }).then(function(response) {
        console.log(response);
        $("#cityName").html("<h1>" + response.list[0].name + "</h1>");
        $("#temp").html(`<h3> Temperature: ${response.list[0].main.temp}&deg;F </h3>`);
        $("#humidity").html("<h3>" + "Humidity: " + response.list[0].main.humidity + " %" + "</h3>");
        $("#wind").html("<h3>" + "Wind Speed: " + response.list[0].wind.speed + " MPH" + "</h3>");
        $("#description").html("<h3>" + response.list[0].weather[0].main + "</h3>");

        // $("#searchDiv").text(response.list[0].name);

        console.log("Temperature: " + response.list[0].main.temp + " F");
        console.log("Humidity: " + response.list[0].humidity + " %");
        console.log("Wind Speed " + response.list[0].wind.speed + " MPH");
        console.log(response.list[0].name);
        localStorage.setItem("city", response.list[0].name);

    });

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityValue + "&units=imperial&type=accurate&mode=json&APPID=" + apiKey;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        type: "GET",
    }).then(function(response) {
        console.log(response);
        $("#forecast1").empty();
        $("#forecast1").html("<h2>" + "5 Day Forecast" + "</h2>");
        // $("#forecast1").css("color", "white");
        for (var i = 0; i < 5; i++) {
            console.log(response.list[i].main.temp);
            var newCard = $("<div class='days'>");
            newCard.html(`
            <div> Temp: ${response.list[i].main.temp}&deg;F </div>
            <div> Humidity: ${response.list[i].main.humidity}% </div>
            `)
            $("#forecast1").append(newCard);


        }
    });
}

for (var i = 0; i < 5; i++) {
    console.log(tomorrow);
}


$("#searchButton").on("click", function(event) {

    getWeather();


});
// $(window).on("load", function() {
//     console.log("js change");
//     var newCity = localStorage.getItem("city");
//     $("#searchDiv").prepend(newCity);
//     $("#inputValue").val(newCity);
// });
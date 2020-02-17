var currentTime = moment().format('HHmm');
console.log(currentTime);
var now = moment().format('MMMM Do, YYYY');
var display = $("#displayMoment");
display.text(now);
var preciseTime = moment().format('LT');
var time = $("#time");
time.text(preciseTime);
display.css("text-align", "center");
var result = $(".form-control").val();
var lock = $(".lock");

$(lock).on("click", function(store) {
    store.preventDefault();
    var userInput = $(this).parent().siblings().children().find("textarea").val();
    var textId = $(this).parent().siblings().children().find("textarea").attr("id")
    console.log(textId)
    if (userInput === "") {
        alert("Error - Cannot save if you don't write anything");
    } else {
        localStorage.setItem(textId, userInput);
    }
});
$(window).on("load", function() {
    console.log($("#nineDiv").val());
    // result.html(lastUser.input);
    $("#text1").val(localStorage.getItem("text1"));
    $("#text2").val(localStorage.getItem("text2"));
    $("#text3").val(localStorage.getItem("text3"));
    $("#text4").val(localStorage.getItem("text4"));
    $("#text5").val(localStorage.getItem("text5"));
    $("#text6").val(localStorage.getItem("text6"));
    $("#text7").val(localStorage.getItem("text7"));
    $("#text8").val(localStorage.getItem("text8"));
    $("#text9").val(localStorage.getItem("text9"));

});

$(window).on("load", function() {
    if (currentTime > 900) {
        $("#text1").css("background-color", "red");
    }
    if (currentTime > 1000) {
        $("#text2").css("background-color", "red");
    }
    if (currentTime > 1100) {
        $("#text3").css("background-color", "red");
    }
    if (currentTime > 1200) {
        $("#text4").css("background-color", "red");
    }
    if (currentTime > 1300) {
        $("#text5").css("background-color", "red");
    }
    if (currentTime > 1400) {
        $("#text6").css("background-color", "red");
    }
    if ($(currentTime > 1500)) {
        $("#text7").css("background-color", "red");
    }
    if (currentTime > 1600) {
        $("#text8").css("background-color", "red");
    }
    if (currentTime > 1700) {
        $("#text9").css("background-color", "red");
    }
    if (currentTime < 900) {
        $("#text1").css("background-color", "green");
    }
    if (currentTime < 1000) {
        $("#text2").css("background-color", "green");
    }
    if (currentTime < 1100) {
        $("#text3").css("background-color", "green");
    }
    if (currentTime < 1200) {
        $("#text4").css("background-color", "green");
    }
    if (currentTime < 1300) {
        $("#text5").css("background-color", "green");
    }
    if (currentTime < 1400) {
        $("#text6").css("background-color", "green");
    }
    if (currentTime < 1500) {
        $("#text7").css("background-color", "green");
    }
    if (currentTime < 1600) {
        $("#text8").css("background-color", "green");
    }
    if (currentTime < 1700) {
        $("#text9").css("background-color", "green");
    }
});
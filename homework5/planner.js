var currentTime = moment().format();
console.log(currentTime);
var now = moment().format('MMMM Do, YYYY');
var moment = $("#displayMoment");
moment.text(now);
moment.css("text-align", "center");
var result = $(".form-control");
var lock = $(".lock");

$(lock).on("click", function(store) {
    store.preventDefault();
    console.log($("#text" + result).val());
    var planner = {
        input: result.$(this).attr("value"),
    };
    if (planner.input === "") {
        alert("Error - Cannot save if you don't write anything");
    } else {
        localStorage.setItem("planner", JSON.stringify(planner));
    }
});
$(window).on("load", function() {
    var lastUser = JSON.parse(localStorage.getItem("planner"));
    result.text(lastUser.input);
    console.log(lastUser.input);
});

$(window).on("load", function() {
    if ($(".col-lg-2") < currentTime) {
        $(".col-lg-2").css("background-color", "red");
    }
});
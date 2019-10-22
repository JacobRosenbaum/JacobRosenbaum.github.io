var currentTime = moment().format();
console.log(currentTime);
var now = moment().format('MMMM Do, YYYY');
var display = $("#displayMoment");
display.text(now);
display.css("text-align", "center");
var result = $(".form-control").val();
var lock = $(".lock");

$(lock).on("click", function(store) {
    store.preventDefault();
    // console.log($("#text" + lock).val());
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

var nine = moment().format('09:00', 'hh:mm');
console.log(now + " " + nine);
$("#nineDiv").append(nine);
$(nine).css("text-align", "right");

var ten = moment().format('10:00', 'hh:mm');
console.log(now + " " + ten);
$("#tenDiv").append(ten);
$(ten).css("text-align", "right");


var eleven = moment().format('11:00', 'hh:mm');
console.log(now + " " + eleven);
$("#elevenDiv").append(eleven);
$(eleven).css("text-align", "right");

var twelve = moment().format('12:00', 'hh:mm');
console.log(now + " " + twelve);
$("#twelveDiv").append(twelve);
$(twelve).css("text-align", "right");

var thirteen = moment().format('13:00', 'hh:mm');
console.log(now + " " + thirteen);
$("#thirteenDiv").append(thirteen);
$(thirteen).css("text-align", "right");

var fourteen = moment().format('14:00', 'hh:mm');
console.log(now + " " + fourteen);
$("#fourteenDiv").append(fourteen);
$(fourteen).css("text-align", "right");

var fifteen = moment().format('15:00', 'hh:mm');
console.log(now + " " + fifteen);
$("#fifteenDiv").append(fifteen);
$(fifteen).css("text-align", "right");

var sixteen = moment().format('16:00', 'hh:mm');
console.log(now + " " + sixteen);
$("#sixteenDiv").append(sixteen);
$(sixteen).css("text-align", "right");

var seventeen = moment().format('17:00', 'hh:mm');
console.log(now + " " + seventeen);
$("#seventeenDiv").append(seventeen);
$(seventeen).css("text-align", "right");

$(window).on("load", function() {
    if ($(currentTime > nine)) {
        $("#text1").css("background-color", "red");
    }
    if ($(currentTime > ten)) {
        $("#text2").css("background-color", "red");
    }
    if ($(currentTime > eleven)) {
        $("#text1").css("background-color", "red");
    }
    if ($(currentTime > twelve)) {
        $("#text4").css("background-color", "red");
    }
    if ($(currentTime > thirteen)) {
        $("#text5").css("background-color", "red");
    }
    if ($(currentTime > fourteen)) {
        $("#text6").css("background-color", "red");
    }
    if ($(currentTime > fifteen)) {
        $("#text7").css("background-color", "red");
    }
    if ($(currentTime > sixteen)) {
        $("#text8").css("background-color", "red");
    }
    if ($(currentTime > seventeen)) {
        $("#text9").css("background-color", "red");
    } else if ($(currentTime < nine)) {
        $("#text1").css("background-color", "green");
    } else if ($(currentTime < ten)) {
        $("#text2").css("background-color", "green");
    } else if ($(currentTime < eleven)) {
        $("#text3").css("background-color", "green");
    } else if ($(currentTime < twelve)) {
        $("#text4").css("background-color", "green");
    } else if ($(currentTime < thirteen)) {
        $("#text5").css("background-color", "green");
    } else if ($(currentTime < fourteen)) {
        $("#text6").css("background-color", "green");
    } else if ($(currentTime < fifteen)) {
        $("#text7").css("background-color", "green");
    } else if ($(currentTime < sixteen)) {
        $("#text8").css("background-color", "green");
    } else if ($(currentTime < seventeen)) {
        $("#text9").css("background-color", "green");
    }
});
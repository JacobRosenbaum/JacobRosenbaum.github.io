/* Create */
$("#addburger").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
        burger_name: $("#burger_name").val().trim()
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function(data) {
        $("#burgerArea").prepend(data);
    });
    $("#burger_name").val("");
});
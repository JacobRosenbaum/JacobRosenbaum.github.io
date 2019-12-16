/* Create */
$("#addburger").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
        burger_name: $("#burger_name").val().trim()
    };

    $.ajax("/api/clients", {
        type: "POST",
        data: newBurger
    }).then(function(data) {
        console.log(data);
    });
    $("#burger").val("");
});
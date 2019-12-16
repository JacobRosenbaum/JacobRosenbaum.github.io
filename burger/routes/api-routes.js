/* Create */
$("#addburger").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
        burger_name: $("#burger_name").val().trim()
        devoured: false;
    };

    $.ajax("/api/clients", {
        type: "POST",
        data: newBurger
    }).then(function() {
        console.log("added new Burger");
    });
});
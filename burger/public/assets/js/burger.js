$(function() {
    $("#devourButton").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");
        var newDevouredState = {
            devoured: newDevoured
        };
        if (newDevouredState.devoured) {
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: newDevouredState
            }).then(
                function() {
                    console.log("changed eat to", newDevoured);
                    location.reload();
                }
            );
        } else {
            $.ajax("/api/updatedBurgers" + id, {
                type: "PUT",
                data: newDevouredState
            }).then(
                function() {
                    console.log("changed eat to", newDevoured);
                    location.reload();
                }
            );
        }
    });
    $("#addburger").on("click", function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger_name").val().trim(),
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });
    $("#deleteButton").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted burger", id);
                location.reload();
            }
        );
    });
});


// $(function() {
//     $(".#addBurger").on("click", function(event) {
//         var id = $(this).data("id");
//         var newBurger = $(this).data("newburger");

//         var addBurger = {
//             burgers: newBurger
//         };

//         // Send the PUT request.
//         $.ajax("/api/burgers/" + id, {
//             type: "PUT",
//             data: addBurger
//         }).then(
//             function() {
//                 location.reload();
//             }
//         );
//     });

//     $(".create-form").on("submit", function(event) {
//         event.preventDefault();
//         var newBurger = {
//             name: $("#burger_name").val().trim(),
//         };

//         // Send the POST request.
//         $.ajax("/api/burgers", {
//             type: "POST",
//             data: newBurger
//         }).then(
//             function() {
//                 location.reload();
//             }
//         );
//     });

//     $(".delete-burger").on("click", function(event) {
//         var id = $(this).data("id");
//         $.ajax("/api/burgers/" + id, {
//             type: "DELETE"
//         }).then(
//             function() {
//                 location.reload();
//             }
//         );
//     });
// });
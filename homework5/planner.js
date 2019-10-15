var now = moment().subtract(10, 'days').calendar();
var moment = $("#displayMoment");
moment.text(now);
moment.css("text-align","center");
// var currentTime = moment().format();    
// console.log(currentTime);
 var result = $("#exampleFormControlTextarea1");
 var lock = $(".lock");

// if (planner.input === ""){
//     displayMessage("error","Cannot save if you don't write anything");
// }
// else{
//     displayMessage("success","Registered successfully");
// }

 $(lock).on("click", function(store){
     store.preventDefault();
     console.log(result.val());
     var planner = {
        input: result.val(),
    };
     localStorage.setItem("planner", JSON.stringify(planner));
     
    console.log(lastUser.input);
 });

 $( document ).ready(function() {
    var lastUser = JSON.parse(localStorage.getItem("planner"));
    result.textContent = lastUser.input;
});


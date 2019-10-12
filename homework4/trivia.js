var viewHighscore = document.querySelector("#view");
var timer = document.querySelector("#timer");
var globalQuestionIndex = 0;
var secondsLeft = 75;
var alert = $("#alert");

function startTimer() {
 var timerInterval = setInterval(function() {
   secondsLeft--;
   timer.textContent = "Time: " + secondsLeft + " seconds left";
   if(secondsLeft === 0) {
     clearInterval(timerInterval);
     alert("Sorry sponge... times up");
   }
 }, 1000);
} 

function startGame(){
    console.log(myQuestions[0].question);
    $("#emptyDiv").prepend(myQuestions[0].question);
    for (var i = 0; i < 4; i++){
      console.log(i);
      var buttons = $(".buttonAnswer"); 
      console.log(buttons);
      var buttonCurrent = buttons[i];
    
      $(buttonCurrent).attr("data-answer",myQuestions[0].answers[i]);
      $(buttonCurrent).attr("answer",myQuestions[0].correctAnswer);
      $(buttonCurrent).attr("value",myQuestions[0].answers[i]);
      $(buttonCurrent).text(myQuestions[0].answers[i]);
      $(buttonCurrent).css("display", "block");
      $(buttonCurrent).css("background-color", "yellow");
};
};

function renderQuestion(){
  myQuestions.question[i++];
};

function submitAnswer(elem){
  var correctAnswer = elem.getAttribute("answer");
  var submittedAnswer = elem.value;
  console.log(submittedAnswer);
  console.log(correctAnswer);
  if (correctAnswer != submittedAnswer){
    $(".buttonAnswer").css("background-color","red");
    secondsLeft -15000; 
    alert.text("WRONG");
    renderQuestion();
  }
  else if (correctAnswer == submittedAnswer){
    $(".buttonAnswer").css("background-color","lightgreen");
    alert.text("CORRECT!!");
    renderQuestion()
  }
};

startQuiz.addEventListener("click", function(event){
    event.preventDefault();
    $("#beg").hide(); 
    startGame(); 
    startTimer();
});

var myQuestions = [
    {
      question: "1. Who lives under a rock?",
      answers: [
        "Spongebob",
        "Squidward",
        "Mr. Krabs",
        "Patrick"
      ],
      correctAnswer: "Patrick"
    },
    {
      question: "2. What restaurant serves the Krabby Patty?",
      answers: [
        "Krabby Guy's Burgers",
        "Krusty Krab",
        "Krabs Patties, Inc",
        "Chum Bucket"
      ],
      correctAnswer: "Krusty Krab"
    },
    {
      question: "3. What kind of pet does Spongebob have?",
      answers: [
        "Sea Urchin",
        "Squid",
        "Snail",
        "Lobster"
      ],
      correctAnswer: "Snail"
    },
    {
    question: "4. What is Squidward's last name?",
      answers: [
        "Tentacles",
        "Inky",
        "Squidpants",
        "Krabs"
      ],
      correctAnswer: "Tentacles"
    },
    {
    question: "What is Spongebob's profession?",
      answers: [
        "Fry Cook",
        "Boating School Instructor",
        "Restaurant Manager",
        "Cleaner"
      ],
        correctAnswer: "Fry Cook"
    },   
  ];


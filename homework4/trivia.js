var viewHighscore = document.querySelector("#view");
var timer = document.querySelector("#timer");
var globalQuestionIndex = 0;
var secondsLeft = 75;
var div1 = $("#div1");
var emptyDiv = $("#emptyDiv");
var wholeDiv = $("#wholeDiv");
var score = 0;

function startTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft + " seconds left";
        if (secondsLeft === 0 || globalQuestionIndex === 5) {
            clearInterval(timerInterval);
            alert("Game Over... You scored " + (score + secondsLeft) + " point(s)");
        }
    }, 1000);
}

function startGame() {
    console.log(myQuestions[0].question);
    $("#questionDiv").prepend(myQuestions[0].question);
    for (var i = 0; i < 4; i++) {
        console.log(i);
        var buttons = $(".buttonAnswer");
        console.log(buttons);
        var buttonCurrent = buttons[i];
        $(buttonCurrent).attr("data-answer", myQuestions[0].answers[i]);
        $(buttonCurrent).attr("answer", myQuestions[0].correctAnswer);
        $(buttonCurrent).attr("value", myQuestions[0].answers[i]);
        $(buttonCurrent).text(myQuestions[0].answers[i]);
        $(buttonCurrent).css("display", "block");
        $(buttonCurrent).css("background-color", "yellow");
    };
};

function renderQuestion() {
    globalQuestionIndex++;
    if (globalQuestionIndex === 5) {
        wholeDiv.empty();
    } else {
        setTimeout(function() {

            console.log(myQuestions[globalQuestionIndex].question);
            $("#questionDiv").empty();
            $("#questionDiv").prepend(myQuestions[globalQuestionIndex].question);
            for (var i = 0; i < 4; i++) {
                console.log(i);
                var buttons = $(".buttonAnswer");
                console.log(buttons);
                var buttonCurrent = buttons[i];

                $(buttonCurrent).attr("data-answer", myQuestions[globalQuestionIndex].answers[i]);
                $(buttonCurrent).attr("answer", myQuestions[globalQuestionIndex].correctAnswer);
                $(buttonCurrent).attr("value", myQuestions[globalQuestionIndex].answers[i]);
                $(buttonCurrent).text(myQuestions[globalQuestionIndex].answers[i]);
                $(buttonCurrent).css("display", "block");
                $(buttonCurrent).css("background-color", "yellow");

            };
        }, 1000);
    }

};

function submitAnswer(elem) {
    var correctAnswer = elem.getAttribute("answer");
    var submittedAnswer = elem.value;
    console.log(submittedAnswer);
    console.log(correctAnswer);
    if (correctAnswer != submittedAnswer) {
        $(".buttonAnswer").css("background-color", "red");
        secondsLeft = secondsLeft - 15;
        div1.text("WRONG");
        renderQuestion();
    } else if (correctAnswer == submittedAnswer) {
        score++;
        $(".buttonAnswer").css("background-color", "lightgreen");
        div1.text("CORRECT!!");
        renderQuestion()
    }
};

startQuiz.addEventListener("click", function(event) {
    event.preventDefault();
    $("#beg").hide();
    startGame();
    startTimer();
});

var myQuestions = [{
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
        question: "5. What is Spongebob's profession?",
        answers: [
            "Fry Cook",
            "Boating School Instructor",
            "Restaurant Manager",
            "Cleaner"
        ],
        correctAnswer: "Fry Cook"
    },
];
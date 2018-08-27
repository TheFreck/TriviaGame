




// trivia questions
var trivia=[
    {
        question: "Question1",
        option1: "1wrong answer1" ,
        option2: "1wrong answer2",
        option3: "1wrong answer3",
        option4: "1answer",
        answer: "1answer"
    },
    {
        question: "Question2",
        option1: "2wrong answer1" ,
        option2: "2wrong answer2",
        option3: "2wrong answer3",
        option4: "2answer",
        answer: "2answer"
    },
    {
        question: "Question3",
        option1: "3wrong answer1" ,
        option2: "3wrong answer2",
        option3: "3wrong answer3",
        option4: "3answer",
        answer: "3answer"
    },
    {
        question: "Question4",
        option1: "4wrong answer1" ,
        option2: "4wrong answer2",
        option3: "4wrong answer3",
        option4: "4answer",
        answer: "4answer"
    },
    {
        question: "True or False?",
        option1: "",
        option2: "True",
        option3: "False",
        option4: "",
        answer: "True"
    },
    {
        question: "Question1",
        option1: "1wrong answer1" ,
        option2: "1wrong answer2",
        option3: "1wrong answer3",
        option4: "1answer",
        answer: "1answer"
    },
    {
        question: "Question2",
        option1: "2wrong answer1" ,
        option2: "2wrong answer2",
        option3: "2wrong answer3",
        option4: "2answer",
        answer: "2answer"
    },
    {
        question: "Question3",
        option1: "3wrong answer1" ,
        option2: "3wrong answer2",
        option3: "3wrong answer3",
        option4: "3answer",
        answer: "3answer"
    },
    {
        question: "Question4",
        option1: "4wrong answer1" ,
        option2: "4wrong answer2",
        option3: "4wrong answer3",
        option4: "4answer",
        answer: "4answer"
    },
    {
        question: "True or False?",
        option1: "",
        option2: "True",
        option3: "False",
        option4: "",
        answer: "False"
    },
    {
        question: "Question1",
        option1: "1wrong answer1" ,
        option2: "1wrong answer2",
        option3: "1wrong answer3",
        option4: "1answer",
        answer: "1answer"
    },
    {
        question: "Question2",
        option1: "2wrong answer1" ,
        option2: "2wrong answer2",
        option3: "2wrong answer3",
        option4: "2answer",
        answer: "2answer"
    },
    {
        question: "Question3",
        option1: "3wrong answer1" ,
        option2: "3wrong answer2",
        option3: "3wrong answer3",
        option4: "3answer",
        answer: "3answer"
    },
    {
        question: "Question4",
        option1: "4wrong answer1" ,
        option2: "4wrong answer2",
        option3: "4wrong answer3",
        option4: "4answer",
        answer: "4answer"
    },
    {
        question: "True or False?",
        option1: "",
        option2: "True",
        option3: "False",
        option4: "",
        answer: "True"
    },
];


// **************************************************************************************************************
// get started
// ************************************************************************************************************** 

function begin() {
    gameTimer();
    roll();
}

var qIndex;
var aIndex;
var rightAnswer;
var answersArray;
var score = 0;
$("#score").text(score);

function roll(){
    
    // initialize
    $("#space").empty();
    var questionArray = [];
    for(i=0; i<trivia.length; i++){
        questionArray.push(i);
    }
    
    function newCard(){
        var card = $("<div>");
        card.addClass("card");
        $("#space").append(card);
    }

    function addQuestion(qIndex){
        var question = $("<div>");
        question.addClass("question");
        question.html("<p>" + trivia[qIndex].question + "</p>");
        $(".card").append(question);
    }


    
    qIndex = Math.floor(Math.random()*questionArray.length);
    
    // randomize the answers
    
    aIndex = Math.floor(Math.random()*4);

    var optionsArray = [
        trivia[qIndex].option1,
        trivia[qIndex].option2,
        trivia[qIndex].option3,
        trivia[qIndex].option4,
        trivia[qIndex].option1,
        trivia[qIndex].option2,
        trivia[qIndex].option3,
    ];
    
    var answer1 = optionsArray[aIndex];
    var answer2 = optionsArray[aIndex+1];
    var answer3 = optionsArray[aIndex+2];
    var answer4 = optionsArray[aIndex+3];
    rightAnswer = trivia[qIndex].answer;
    
    answersArray = [answer1, answer2, answer3, answer4]
    var answersArrayString = ["answer1","answer2","answer3","answer4"];    
    
    //add answers to the card

    function addAnswers(){
        var answerList = $("<ul>");
        answerList.attr("id","aList");
        
        for(i=0; i<4; i++){
            var answers = $("<button>");
            answers.addClass("answer");
            answers.attr("id",answersArrayString[i]);
            answers.attr("data", optionsArray[i]);
            answers.html("<p>" + answersArray[i] + "</p>");
            answers.appendTo(answerList);
        }
        $(".card").append(answerList);
    }
    
    newCard();
    addQuestion(qIndex);
    addAnswers();

    
    //finish the card
    if(trivia.length > 1){
        trivia.splice(qIndex,1);
    }else{
        $("#card").empty();
        $("#card").html("<h1>You Win!!!</h1>");
    }
}

// **************************************************************************************************
// a click event to select an answer
// **************************************************************************************************

$(document).on("click", '.answer', function(){
    console.log("rightAnswer",rightAnswer);
    console.log("this data",$(this).attr("data"));
    if($(this).attr("data")===rightAnswer){
        score ++;
        console.log("score",score);
        $("#score").text(score);
        for(i=0; i<4; i++){
            if(answersArray[i]===rightAnswer){
                $(this).addClass("glow");
            }
        }
    }
    roll()
});

// ************************************************************************************************
// timer
// ************************************************************************************************


function gameTimer(){
    clearInterval(intervalId);
    var seconds = 30;
    var intervalId = setInterval(decrement, 1000);
    function decrement(){
        $("#timer").text(seconds);
        seconds --;
        $("#timer").text(seconds);
    
        if(seconds <= 0){
            clearInterval(intervalId);
            gameOver();
        }
    }
}

// **************************************************************************************************************
// the end of times
// **************************************************************************************************************

function gameOver(){
    $(".card").empty();
    var question;
    if(score != 1){
        question = "questions";
    }else{
        question = "question";
    }
    $(".card").html("<h3>you got " + score + " " + question + " right!</h3>");
}


// hit or miss on whether it logs the correct answer
// almost time to find questions
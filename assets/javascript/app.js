



/*
when player presses 'begin' a card pops up with a multiple choice or true or false question on it.

they have some number of times they can miss a question

track and graph how many cards the user gets each time they play to show potential improvement

*/

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
        answer: "T/F"
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
        answer: "T/F"
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
        answer: "T/F"
    },
];

var inGame = false;
$("#inGame").text("Game On: " + inGame);

// create a begin function
var qIndex;
var aIndex;
var score = 0;
$("#score").text("Score: " + score);

function begin(){

    inGame = true;
    $("#inGame").text("Game On: " + inGame);
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
    
    console.log("qIndex",qIndex);
    // randomize the answers
    
    aIndex = Math.floor(Math.random()*4);
    console.log("aIndex",aIndex);

    var answerArray = [
        trivia[qIndex].option1,
        trivia[qIndex].option2,
        trivia[qIndex].option3,
        trivia[qIndex].option4,
        trivia[qIndex].option1,
        trivia[qIndex].option2,
        trivia[qIndex].option3,
        trivia[qIndex].answer,
    ];
    
    var answer1 = answerArray[aIndex];
    var answer2 = answerArray[aIndex+1];
    var answer3 = answerArray[aIndex+2];
    var answer4 = answerArray[aIndex+3];
    var rightAnswer = answerArray[7];
    
    var answerArray = [answer1, answer2, answer3, answer4]
    
    //add answers to the card
    
    

    function addAnswers(){
        var answerList = $("<ul>");
        answerList.attr("id","aList");
        
        for(i=0; i<4; i++){
            var answers = $("<button>");
            answers.addClass("answer");
            answers.attr("data", answerArray[i]);
            answers.html("<p>" + answerArray[i] + "</p>");
            answers.appendTo(answerList);
        }
        $(".card").append(answerList);
    }
    
    newCard();
    addQuestion(qIndex);
    addAnswers();

    // create a click event to select an answer
    
    $(document).on("click", '.answer', function(){
        if($(this).attr("data")===rightAnswer){
            score ++;
            $("#score").text("Score: " + score);
            console.log("win or lose: win.",$(this).attr("data") + "=" + rightAnswer);
        }else{
            console.log("win or lose: lose.",rightAnswer);
        }
    });

    //finish the card
    if(trivia.length > 1){
        trivia.splice(qIndex,1);
    }else{
        $("#card").empty();
        $("#card").html("<h1>You Win!!!</h1>");
        inGame = false;
        $("#inGame").text("Game On: " + inGame);
    }
}


var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Ankit",
    score: 4,
  },{
    name: "visheh",
    score: 3,
  },
]

var questions = [{
  question: "I'm from which state? ",
  answer: "Uttar Pradesh"
}, {
  question: "My favorite sports would be? ",
  answer: "Cricket"
},
{
  question: "My favorite webs series would be? ",
  answer: "Breaking bad"
},{
  question: "where i'm learning programing? ",
  answer: "neog.camp"
}];

function welcome() {
 var usersName = readlineSync.question("What's your name? ");

  console.log("Hii "+ usersName + " lets check how well do you know me(deepak)?");
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("you are right!");
    score = score + 1;
    
  } else {
    console.log("opps it was a wrong answer");
   
  }

  console.log("current score: ", score);
  console.log("-----------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("You SCORED: ", score);

  console.log("Check out the high scores, if you should be there then send me the screenshot and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();

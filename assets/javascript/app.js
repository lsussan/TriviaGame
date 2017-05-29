$(document).ready(function() {

//Starts the game on click
$("#startPage").on("click", function() {
	startGame();
})

  //Variables
  var questionCount = 0;
  var number = 30;
  var wins = 0;
  var losses = 0;
  var ans1 = false;
  var ans2 = false;
  var ans3 = false;
  var ans4 = false;

// question and answer section

var questions = [{
  question: "Who is the Dodgers all time Home Run leader?",
  answers: ["Gil Hodges", "Eric Karros", "Duke Snider", "Pedro Guerrero"],
  correctAnswer: 2
}, {
  question: "Who led the 2014 season in RBI's?",
  answers: ["Adrian Gonzalez","Matt Kemp","Hanley Ramirez", "Andre Either"],
  correctAnswer: 0
}, {
  question: "What were the Dodgers called before the Dodgers?",
  answers: ["Grays", "Los Doyers", "Giants", "Robins"],
  correctAnswer: 3
}, {
  question: "How many World Series championships were won under Tommy Lasorda?",
  answers: ["0","2","5","7"],
  correctAnswer: 1
}, {
  question: "What year did the Dodgers move from Brooklyn to Los Angeles?",
  answers: ["1959","1956","1958","1955"],
  correctAnswer: 2
}];

// function to reset timer

  function resetTimers() {
    $('.timeRemaining').text("30");
    $('.nextQuestion').text("5");
  }

// place questions and answers into appropriate place

  function insertQuestions() {
      if (questionCount == 0) {
        $("#question").text(questions[0].question);
        $("#answer1").text(questions[0].answers[0]);
        $("#answer2").text(questions[0].answers[1]);
        $("#answer3").text(questions[0].answers[2]);
        $("#answer4").text(questions[0].answers[3]);
      } else if (questionCount == 1) {
        $("#question").text(questions[1].question);
        $("#answer1").text(questions[1].answers[0]);
        $("#answer2").text(questions[1].answers[1]);
        $("#answer3").text(questions[1].answers[2]);
        $("#answer4").text(questions[1].answers[3]);
      } else if(questionCount == 2) {
        $("#question").text(questions[2].question);
        $("#answer1").text(questions[2].answers[0]);
        $("#answer2").text(questions[2].answers[1]);
        $("#answer3").text(questions[2].answers[2]);
        $("#answer4").text(questions[2].answers[3]);
      } else if(questionCount == 3) {
        $("#question").text(questions[3].question);
        $("#answer1").text(questions[3].answers[0]);
        $("#answer2").text(questions[3].answers[1]);
        $("#answer3").text(questions[3].answers[2]);
        $("#answer4").text(questions[3].answers[3]);
      } else if(questionCount == 4) {
        $("#question").text(questions[4].question);
        $("#answer1").text(questions[4].answers[0]);
        $("#answer2").text(questions[4].answers[1]);
        $("#answer3").text(questions[4].answers[2]);
        $("#answer4").text(questions[4].answers[3]);
      }
    }

  // start the game
  function startGame() {
        $("#startPage").addClass("hideDiv");
        $("#questionDiv").removeClass("hideDiv")
    insertQuestions();
    timerOne();
    number = 30;

// click button set up for answer choices

  $("#answer1").one("click",function(){
      ans1=true;
      itsTrue();
    });

  $("#answer2").one("click",function(){
      ans2=true;
      itsTrue();
    });

  $("#answer3").one("click",function(){
      ans3=true;
      itsTrue();
    });

  $("#answer4").one("click",function(){
      ans4=true;
      itsTrue();
    });

//  confirm if button click/ answer is correct

  function itsTrue () {
    if (ans3 == true && questionCount == 0){
      resetTimers();
      correct();
      stop();
    } else if (ans1 == true && questionCount == 1){
      resetTimers();
      correct();
      stop();
    } else if (ans4 == true && questionCount == 2){
      resetTimers();
      correct();
      stop();
    } else if (ans2 == true && questionCount == 3){
      resetTimers();
      correct();
      stop();
    } else if (ans3 == true && questionCount == 4){
      resetTimers();
      correct();
      stop();
      }
    }
  }

//Timer for the main question page
    function timerOne(){
      fiveCounter = setInterval(decrement, 1000);
    }

    function decrement(){
      number--;
      $('.timeRemaining').html(number);
      if (number === 0){
        stop();
        timeUp();
        $('.timeRemaining').text("30");
      }
    }

    function stop(){
      clearInterval(fiveCounter);
    }

    //When time is up, send user to "Time is up!" page.
    function timeUp() {
      var timeUpNumber = 5;
      resetTimers();
      $("#questionDiv").addClass("hideDiv");
      $("#resultDiv").removeClass("hideDiv");
      $(".result").text("You ran out of time!")
      runClock();


      function runClock(){
        bounter = setInterval(decrement, 1000);
      }

      function decrement(){
        timeUpNumber--;
        $('.nextQuestion').html(timeUpNumber);
        if (timeUpNumber === 0){
          stop();
          startGame();
          $("#resultDiv").addClass("hideDiv");
        }
      }

      function stop(){
        clearInterval(bounter);
      }
  }

  //Sends user to correct answer page if answer is correct
    function correct() {
      console.log("correct");
      questionCount++;
      wins++
      var timeUpNumber = 5;
      $("#questionDiv").addClass("hideDiv");
      $("#resultDiv").removeClass("hideDiv");
      $(".result").text("You're correct!!");
      runClock();

      ans1 = false;
      ans2 = false;
      ans3 = false;
      ans4 = false;



      //Timer for correct/incorrect page (5 secs)
      function runClock(){
        inCounter = setInterval(decrement, 1000);
      }

      function decrement(){
        timeUpNumber--;
        $('.nextQuestion').html(timeUpNumber);
        if (timeUpNumber === 0){
          stop();
          startGame();
          number = 30;
          $("#resultDiv").addClass("hideDiv");
        }
      }

      function stop(){
        clearInterval(inCounter);
      }
  }


    function incorrect() {
      console.log("incorrect");
      questionCount++;
      losses++;
      var timeUpNumber = 5;
      $("#questionDiv").addClass("hideDiv");
      $("#resultDiv").removeClass("hideDiv");
      $(".result").text("WRONG!!!")
      runClock();

      ans1 = false;
      ans2 = false;
      ans3 = false;
      ans4 = false;

      //Timer for correct/incorrect opage (5 sec)
      function runClock(){
        inCounter = setInterval(decrement, 1000);
      }

      function decrement(){
        timeUpNumber--;
        $('.nextQuestion').html(timeUpNumber);
        if (timeUpNumber === 0){
          stop();
          startGame();
          number = 30;
          $("#resultDiv").addClass("hideDiv");
        }
      }

      function stop(){
        clearInterval(runClock);
      }
  }
  })

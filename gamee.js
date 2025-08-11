// var buttonColours=["red","blue","green","yellow"];

// var gamePattern=[];
// var userClickedPattern=[];

// var started = false;
// var level = 0;

// $(document).keypress(function() {
//     if(!started){
//         $("#level-title").text("Level" + level);
//         nextSequence();
//         started=true;
//     }
// });

// $(".btn").click(function(){

//     var userChosenColor = $(this).attr("id");
//     userClickedPattern.push(userChosenColor);

//     playSound(userChosenColor);
//     animatePress(userChosenColor);
    
//     checkAnswer(userClickedPattern.length-1);
// });

// function checkAnswer(currentLevel) {

//     if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
//         if(userClickedPattern.length === gamePattern.length){

//             setTimeout( function() {
//                 nextSequence();
//             }, 1000);
//         }
//     }else{
//         playSound("wrong");

//         $("body").addClass("game-over");
//         setTimeout(function () {
//         $("body").removeClass("game-over");
//         }, 200);

//         $("#level-title").text("Game Over, Press Any Key to Restart");
//         startOver();
//     }
// }

// function nextSequence(){
//     userClickedPattern=[];

//     level++ ;
//     $("#level-title").text("Level " + level);

//     var randomNumber=Math.floor(Math.random() *4 );
//     var randomChosenColour = buttonColours[randomNumber];
//     gamePattern.push(randomChosenColour);

//     $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//     playSound(randomChosenColour);
// }

// function playSound(name){

//     var audio = new Audio("sounds/" + name + ".mp3");
//     audio.play();

// }

// function animatePress(currentColor) {

//     $("#" + currentColor).addClass("pressed");

//     setTimeout( function() {
//         $("#" + currentColor).removeClass("pressed");
//     }, 100);

// }

// function startOver() {

//     level = 0;
//     gamePattern = [];
//     started = false;
// }

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

// Detect mobile device
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Set initial title text based on device
if (isMobile) {
    $("#level-title").text("Tap to Start");
} else {
    $("#level-title").text("Press A Key to Start");
}

// Start game on keypress (for desktop)
$(document).keypress(function () {
    if (!started && !isMobile) {
        startGame();
    }
});

// Start game on tap/click anywhere (for mobile)
$(document).on("touchstart click", function (event) {
    if (!started && isMobile) {
        startGame();
    }
});

function startGame() {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
}

$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text(isMobile ? "Game Over, Tap to Restart" : "Game Over, Press Any Key to Restart");

        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

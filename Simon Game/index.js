var buttonColours=["red", "blue", "green", "yellow"];

var gamePattern=[];
var userClickedPattern=[];

var started = false;

var level= 0;

$(document).on("keydown",function(key){
  if(!started){

  $("#level-title").text("Level"+level);
    nextSequence();
    started = true;
  }
})

$(".btn").click(function(){
  var userChosenColor= $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatepress(userChosenColor);
checkAnswer(userClickedPattern.length-1);
})
function checkAnswer(currentLevel){

if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
  console.log("success");
if(gamePattern.length===userClickedPattern.length){
  setTimeout(function(){
    nextSequence();
  },1000);
}
}

else{
  var wrongButton= new Audio("sounds/wrong.mp3");
    wrongButton.play();
    $("body").addClass("game-over");
    $("h1").text("Game Over,  press any key to      try again")
  setTimeout(function(){
    $("body").removeClass("game-over");
      startOver();
  },1000);

}
function startOver(){
  level=0
  started=false;
  gamePattern=[];
}


}
function nextSequence(){
userClickedPattern=[];
  level++;

  $("#level-title").text("Level "+level);

  var randomNumber=Math.round(Math.random()*3);

  var colorSelector= buttonColours[randomNumber];

  gamePattern.push(colorSelector);

  $("#"+colorSelector).fadeOut(100).fadeIn(100);
  playSound(colorSelector);
  animatePress(colorSelector);
console.log(colorSelector);
}


function playSound(s){

$("#"+s).fadeIn(100).fadeOut(100).fadeIn(100);
var color= new Audio("sounds/"+s+".mp3");
  color.play();

}

function animatepress(currentColour){

  $("#"+currentColour).addClass("pressed");

setTimeout( function(){
      $("#"+currentColour).removeClass("pressed")
    },100);
  }

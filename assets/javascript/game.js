//setup variables
let  numbertoguess = Math.floor(Math.random()* 121);


 var crystal1 = Math.ceil(Math.random()*12) ;
 var crystal2 = Math.ceil(Math.random()*12) ;
 var crystal3 = Math.ceil(Math.random()*12) ;
 var crystal4 = Math.ceil(Math.random()*12) ;

 function shuffle() {
  numbertoguess = Math.floor(Math.random()* 121);
  crystal1 = Math.ceil(Math.random()*12) ;
  crystal2 = Math.ceil(Math.random()*12) ;
  crystal3 = Math.ceil(Math.random()*12) ;
  crystal4 = Math.ceil(Math.random()*12) ;
 }

 var score = 0;
 var wins = 0;
 var losses = 0;
 
 $("#number-to-guess").html(numbertoguess);

$("#diamond").on("click", addCrystal1ToScore);

function addCrystal1ToScore() {
  score = score + crystal1; 
  $("#score-box").html(score);
  tally(score);
}



$("#bluediamond").on("click", addCrystal2ToScore);

function addCrystal2ToScore() {
  score = score + crystal2; 
  $("#score-box").html(score);
  tally(score);
}
 

 $("#pinkruby").on("click", addCrystal3ToScore);

 function addCrystal3ToScore() {
  score = score + crystal3; 
  $("#score-box").html(score);
  tally(score);
 }
  
 
 $("#greendiamond").on("click", addCrystal4ToScore);

 function addCrystal4ToScore() {
  score = score + crystal4; 
  $("#score-box").html(score);
  tally(score);
  } 
  
  

  // function resetGame() {
  //   // Make our current total number 0.
  //   score = 0;
  //   // Generate random crystal values.
  //   // Generate new number to guess.
  //   $("#score-box").text(numbertoguess);
  // }


  function tally () {
    var wins=0;
    var losses=0;
    
    if(score === numbertoguess){
        wins++;
    $("#win").html(wins);
    alert("You Won!");
    resetGame();
  }
  if(score> numbertoguess) {
    
    // alert("Game Over! You Lose!");
    losses++;
    $("#loss").html(losses);
     alert("Game Over! You Lose!");
     resetGame();

  }
  }
 
 function updateScore () {
   score++
 }
 
  function resetGame() {
    shuffle()
    // numbertoguess = Math.floor(Math.random()* 121);
    $("#number-to-guess").html(numbertoguess);
      score = 0;
    $("#score-box").html(0);
    tally()
// updateScore()
 
  }
 
;

 


 
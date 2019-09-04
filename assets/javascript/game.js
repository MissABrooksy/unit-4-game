//setup variables
var  numbertoguess = Math.floor(Math.random()* 121);


 var crystal1 = Math.ceil(Math.random()*12) ;
 var crystal2 = Math.ceil(Math.random()*12) ;
 var crystal3 = Math.ceil(Math.random()*12) ;
 var crystal4 = Math.ceil(Math.random()*12) ;

 var score = 0;
 var wins = 0;
 var losses = 0;
 
 $("#number-to-guess").html(numbertoguess);

$("#diamond").on("click", addCrystal1ToScore);

function addCrystal1ToScore() {
  score = score + crystal1; 
  $("#score-box").html(score);
}

addCrystal1ToScore();

$("#bluediamond").on("click", addCrystal2ToScore);

function addCrystal2ToScore() {
  score = score + crystal2; 
  $("#score-box").html(score);
}
  addCrystal2ToScore();

 $("#pinkruby").on("click", addCrystal3ToScore);

 function addCrystal3ToScore() {
  score = score + crystal3; 
  $("#score-box").html(score);
 }
  addCrystal3ToScore();
 
 $("#greendiamond").on("click", addCrystal4ToScore);
 function addCrystal4ToScore() {
  score = score + crystal4; 
  $("#score-box").html(score);
  } addCrystal4ToScore();

 
 
 $("#number-to-guess").html(numbertoguess);


 
//setup variables
var  numbertoguess = Math.floor(Math.random()* 121);


 var crystal1 = Math.ceil(Math.random()*12) ;
var crystal2 =  Math.ceil(Math.random()*12) ;
 var crystal3 = Math.ceil(Math.random()*12) ;
 var crystal4 = Math.ceil(Math.random()*12) ;

 var score = 0;
 var wins = 0;
 var losses = 0;
 

$("#diamond").on("click", addCrystal1ToScore);

function addCrystal1ToScore() {
  score = score + crystal1; 
  $("#score-box").html(score);
}

addCrystal1ToScore(5, 7)
// $("#crystal2").on("click", crystal22());

// $("#crystal3").on("click", crystal33());

// $("#crystal4").on("click", crystal44());


 
// document.getElementById('diamond').onclick = function crystal1() {

//   document.getElementById('diamond').innerHTML = sum;
//   document.getElementById('diamond').style = "Color: red";
//     }
  
// function crystal11(crystal1, score) {
//   var sum = crystal1 + score;
//   return sum;

// }





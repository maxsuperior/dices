
//*******************DICE RANDOM ROULING*****************//
var leftDiceRandomNumber = Math.floor(Math.random() * 6) + 1;
var imageSource1 = "images/dice" + leftDiceRandomNumber + ".png";
var leftDicePic = document.querySelectorAll("img")[0];
leftDicePic.setAttribute("src", imageSource1);

var rightDiceRandomNumber = Math.floor(Math.random() * 6) + 1;
var imageSource2 = "images/dice" + rightDiceRandomNumber + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

//*****************CHANGING H1 RESULT************************//
if (leftDiceRandomNumber > rightDiceRandomNumber) {
document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}
else if (leftDiceRandomNumber < rightDiceRandomNumber) {
  document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw";
}

"use strict";

var page = document.querySelector("body");
var isX = true;
var startingPage = true;

var selectBox = function selectBox(boxes, symbol) {
  boxes.forEach(function (box) {
    box.addEventListener("click", function () {
      box.innerHTML = "\n                <h2>".concat(symbol, "</h2>");
    });
  });
};

var startGame = function startGame() {
  page.innerHTML = "";
  page.innerHTML = "\n    <h3>Choose your symbol!</h3>\n    <div id='selectionPage'> \n        <div id=\"blue\"><h4>X</h4></div>\n        <div id=\"red\"><h4>O</h4></div>\n    </div>\n    ";
  var selectSymbolBlue = document.querySelector('#blue');
  var selectSymbolRed = document.querySelector('#red');
  selectSymbolBlue.addEventListener("click", function () {
    console.log("It is working!");
    startingPage = false;
  });
  selectSymbolRed.addEventListener("click", function () {
    console.log("It is working!");
    startingPage = false;
    isX = false;
  });
};

if (startingPage) {
  startGame();
} else {
  if (isX) {
    selectBox(document.querySelectorAll(".box"), "X");
  } else {
    selectBox(document.querySelectorAll(".box"), "O");
  }
}
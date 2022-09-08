"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var page = document.querySelector("body");
var gameDisplay = document.querySelector(".table");
var topLeft = document.querySelector("#box-1");
var topMid = document.querySelector("#box-2");
var topRight = document.querySelector("#box-3");
var midLeft = document.querySelector("#box-4");
var mid = document.querySelector("#box-5");
var midRight = document.querySelector("#box-6");
var bottomLeft = document.querySelector("#box-7");
var bottomMid = document.querySelector("#box-8");
var bottomRight = document.querySelector("#box-9");
var restart = document.querySelector('#btn');
var isX = true;
var startingPage = true;

var selectBox = function selectBox(boxes, symbol) {
  var topLeft = document.querySelector("#box-1");
  var topMid = document.querySelector("#box-2");
  var topRight = document.querySelector("#box-3");
  var midLeft = document.querySelector("#box-4");
  var mid = document.querySelector("#box-5");
  var midRight = document.querySelector("#box-6");
  var bottomLeft = document.querySelector("#box-7");
  var bottomMid = document.querySelector("#box-8");
  var bottomRight = document.querySelector("#box-9"); // restart.addEventListener('click', () => {
  //     boxes.forEach((box) => {
  //         box.innerHTML = '';
  //     });
  // });

  boxes.forEach(function (box) {
    if (topLeft.innerHTML == 'O' && topMid.innerHTML == 'O' && topRight.innerHTML == 'O' || topLeft.innerHTML == 'X' && topMid.innerHTML == 'X' && topRight.innerHTML == 'X') {
      page = (_readOnlyError("page"), "");
      page.innerHTML = "\n            <div id=\"end-game\">\n                <p>".concat(symbol, " Wins!</p>\n                <button>Srtart Again</button>\n            </div>\n            ");
    } else {
      box.addEventListener("click", function () {
        if (isX && box.innerHTML == "") {
          box.className = "boxB";
          box.innerHTML = 'X'; // `<h2 id="x-color">${symbol}</h2>`;

          console.log(topLeft.innerHTML + " X");
          symbol = 'O';
          isX = false;
        } else if (!isX && box.innerHTML == "") {
          box.innerHTML = 'O'; // `<h2 id="o-color">${symbol}</h2>`;

          console.log(topLeft.innerHTML);
          console.log(box.innerHTML + " O");
          symbol = 'X';
          isX = true;
        }
      });
    }
  });
};

var startGame = function startGame() {
  page.innerHTML = "";
  page.innerHTML = "\n    <h3>Choose your symbol!</h3>\n    <div id='selectionPage'> \n        <div id=\"blue\"><h4>X</h4></div>\n        <div id=\"red\"><h4>O</h4></div>\n    </div>\n    ";
  var selectSymbolBlue = document.querySelector('#blue');
  var selectSymbolRed = document.querySelector('#red');
  selectSymbolBlue.addEventListener("click", function () {
    startingPage = false;
    isX = true;
    gamePhase(startingPage, isX);
  });
  selectSymbolRed.addEventListener("click", function () {
    startingPage = false;
    isX = false;
    gamePhase(startingPage, isX);
  });
};

console.log(startingPage);

var gamePhase = function gamePhase(startingPage, isX) {
  if (startingPage) {
    startGame();
  } else if (!startingPage) {
    page.innerHTML = "";
    page.innerHTML = "\n        <h1>Tic-Tac-Toe</h1>\n        <section class=\"table\">\n            <div class=\"box\" id=\"box-1\"></div>\n            <div class=\"box\" id=\"box-2\"></div>\n            <div class=\"box\" id=\"box-3\"></div>\n            <div class=\"box\" id=\"box-4\"></div>\n            <div class=\"box\" id=\"box-5\"></div>\n            <div class=\"box\" id=\"box-6\"></div>\n            <div class=\"box\" id=\"box-7\"></div>\n            <div class=\"box\" id=\"box-8\"></div>\n            <div class=\"box\" id=\"box-9\"></div>\n\n        </section>\n        <div id=\"btn\">Restart</div>\n        ";

    if (isX) {
      selectBox(document.querySelectorAll(".box"), "X");
    } else {
      selectBox(document.querySelectorAll(".box"), "O");
    }
  }
};

gamePhase(startingPage, isX);
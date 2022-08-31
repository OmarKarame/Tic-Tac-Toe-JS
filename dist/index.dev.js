"use strict";

// const topLeft = document.querySelector("#box-1");
// const topMid = document.querySelector("#box-2");
// const topRight = document.querySelector("#box-3");
// const midLeft = document.querySelector("#box-4");
// const mid = document.querySelector("#box-5");
// const midRight = document.querySelector("#box-6");
// const bottomLeft = document.querySelector("#box-7");
// const bottomMid = document.querySelector("#box-8");
// const bottomRight = document.querySelector("#box-9");
var selectBox = function selectBox(boxes, symbol) {
  boxes.forEach(function (box) {
    box.addEventListener("click", function () {
      box.innerHTML = "\n                <h2>".concat(symbol, "</h2>");
    });
  });
};

selectBox(document.querySelectorAll(".box"), "X");
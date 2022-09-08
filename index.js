const page = document.querySelector("body");

const gameDisplay = document.querySelector(".table");

const topLeft = document.querySelector("#box-1");
const topMid = document.querySelector("#box-2");
const topRight = document.querySelector("#box-3");
const midLeft = document.querySelector("#box-4");
const mid = document.querySelector("#box-5");
const midRight = document.querySelector("#box-6");
const bottomLeft = document.querySelector("#box-7");
const bottomMid = document.querySelector("#box-8");
const bottomRight = document.querySelector("#box-9");

const restart = document.querySelector('#btn')

let isX = true;

let startingPage = true;

const selectBox = (boxes, symbol) => {
    const topLeft = document.querySelector("#box-1");
    const topMid = document.querySelector("#box-2");
    const topRight = document.querySelector("#box-3");
    const midLeft = document.querySelector("#box-4");
    const mid = document.querySelector("#box-5");
    const midRight = document.querySelector("#box-6");
    const bottomLeft = document.querySelector("#box-7");
    const bottomMid = document.querySelector("#box-8");
    const bottomRight = document.querySelector("#box-9");
// restart.addEventListener('click', () => {
    //     boxes.forEach((box) => {
    //         box.innerHTML = '';
    //     });
    // });

    boxes.forEach((box) => {
        if(topLeft.innerHTML == 'O' && topMid.innerHTML == 'O' && topRight.innerHTML == 'O' || topLeft.innerHTML == 'X' && topMid.innerHTML == 'X' && topRight.innerHTML == 'X'){
            page = ``; 
            page.innerHTML = `
            <div id="end-game">
                <p>${symbol} Wins!</p>
                <button>Srtart Again</button>
            </div>
            `;
        }
        else{
            box.addEventListener("click", () => {
                if(isX && box.innerHTML == ``){
                    box.className = "boxB";
                    box.innerHTML = 'X' // `<h2 id="x-color">${symbol}</h2>`;
                    console.log(topLeft.innerHTML + " X");
                    symbol = 'O';
                    isX = false;
                }
                else if(!isX && box.innerHTML == ``){
                    box.innerHTML = 'O' // `<h2 id="o-color">${symbol}</h2>`;
                    console.log(topLeft.innerHTML);
                    console.log(box.innerHTML + " O");
                    symbol = 'X';
                    isX = true;
                }
            });
        }
    }
)};


const startGame = () => {
    page.innerHTML = ``;
    page.innerHTML = `
    <h3>Choose your symbol!</h3>
    <div id='selectionPage'> 
        <div id="blue"><h4>X</h4></div>
        <div id="red"><h4>O</h4></div>
    </div>
    `;
    const selectSymbolBlue = document.querySelector('#blue');
    const selectSymbolRed = document.querySelector('#red');

    selectSymbolBlue.addEventListener("click", () => {
        startingPage = false;
        isX = true;
        gamePhase(startingPage, isX);
    })
    selectSymbolRed.addEventListener("click", () => {
        startingPage = false;
        isX = false;
        gamePhase(startingPage, isX);
    })
}
console.log(startingPage);

const gamePhase = (startingPage, isX) => {
    if (startingPage){
        startGame();  
    }
    else if (!startingPage) {
        page.innerHTML = ``;
        page.innerHTML = `
        <h1>Tic-Tac-Toe</h1>
        <section class="table">
            <div class="box" id="box-1"></div>
            <div class="box" id="box-2"></div>
            <div class="box" id="box-3"></div>
            <div class="box" id="box-4"></div>
            <div class="box" id="box-5"></div>
            <div class="box" id="box-6"></div>
            <div class="box" id="box-7"></div>
            <div class="box" id="box-8"></div>
            <div class="box" id="box-9"></div>

        </section>
        <div id="btn">Restart</div>
        `;
        if(isX){
            selectBox(document.querySelectorAll(".box"), "X");
        }
        else{
            selectBox(document.querySelectorAll(".box"), "O");
        }
    }
}

gamePhase(startingPage, isX);
const page = document.querySelector("body");
let isX = true;

let startingPage = true;

const selectBox = (boxes, symbol) => {
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            console.log(box);

            if(isX && box.innerHTML == ``){
                box.innerHTML = `
                    <h2 id="x-color">${symbol}</h2>`;
                symbol = 'O';
                isX = false;
            }
            else if(!isX && box.innerHTML == ``){
                box.innerHTML = `
                    <h2  id="o-color">${symbol}</h2>`;
                symbol = 'X';
                isX = true;
            }

        });
    });
}

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

// me nab soumi amir ayman teena daniel 
// 400 400 400 200 200 300
// danielGF? sasha?
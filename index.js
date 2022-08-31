const page = document.querySelector("body");
let isX = true;

let startingPage = true;

const selectBox = (boxes, symbol) => {
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            box.innerHTML = `
                <h2>${symbol}</h2>`;
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
        console.log("It is working!");
        startingPage = false;
    })
    selectSymbolRed.addEventListener("click", () => {
        console.log("It is working!");
        startingPage = false;
        isX = false;
    })
}


if (startingPage){
    startGame();
}
else {
    if(isX){
        selectBox(document.querySelectorAll(".box"), "X");
    }
    else{
        selectBox(document.querySelectorAll(".box"), "O");
    }
}
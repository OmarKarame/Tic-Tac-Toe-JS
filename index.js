
const selectBox = (boxes, symbol) => {
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            box.innerHTML = `
                <h2>${symbol}</h2>`;
        });
    });
}

selectBox(document.querySelectorAll(".box"), "X");
const cellElements = document.querySelectorAll("[data-cell]");
const lines = document.querySelectorAll("[data-lines]");

let isCircleTurn = false;

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd)
};

const swapTurns = () => {
    isCircleTurn = !isCircleTurn;

    lines.classList.remove("circulo");
    lines.classList.remove("x");

    if(isCircleTurn) {
        lines.classList.add("circulo");
    }else {
        lines.classList.add("x");
    }
}

const handelclick = (e) => {
    //Colocar o elemento x ou circulo
    const cell = e.target;
    const classToAdd = isCircleTurn ? "circulo" : "x";
    
    placeMark(cell, classToAdd);
    
    //Identificar por vitória
    //Identificar por empate
    //Alterar o elemento

    swapTurns();
};


for (const cell of cellElements) {
    cell.addEventListener("click", handelclick,{once: true}); //once = clicar uma unica vez
}


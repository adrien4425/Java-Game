const pl1 = document.getElementsByTagName("#pl1");
const pl2 = document.querySelector("#pl2");

const newgame = document.querySelector("#newgame");
const dice = document.querrySelector("#diceee");
const rolldice = document.querySelector("#rolldice");
const hold = document.querySelector("#hold");

const player1 = {
    plscore: document.querrySelector("#pl1score"),
    plcurrent: document.querrySelector("#pl1current"),
    plbox: document.querySelector("#pl1box"),
    current: 0,
    total: 0,
}

const player2 = {
    plscore: document.querrySelector("#pl2score"),
    plcurrent: document.querrySelector("#pl2current"),
    plbox: document.querySelector("#pl2box"),
    current: 0,
    total: 0,
}

function newgame() {
    player1.plscore.textContent = 0;
    player2.plscore.textContent = 0;
    player1.plcurrent= 0;
    player2.plcurrent.textContent = 0;
}

newgame()
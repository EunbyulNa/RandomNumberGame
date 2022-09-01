


document.getElementById("btn").addEventListener("click", dice);

const imgs = ["imgs/dice1.png", "imgs/dice2.png", "imgs/dice3.png", "imgs/dice4.png", "imgs/dice5.png", "imgs/dice6.png"]

let pOneResult = document.getElementById("pOneImg");
let pTwoResult = document.getElementById("pTwoImg");
let result = document.getElementById("announce");

function dice() {

let pOnenum = Math.floor(Math.random() * 6);
let pTwonum = Math.floor(Math.random() * 6);
pOneResult.src = imgs[pOnenum];
pTwoResult.src = imgs[pTwonum];

if(pOnenum > pTwonum) {
  result.innerHTML = "PLAYER 1 WON!";
}else if(pOnenum < pTwonum){
  result.innerHTML = "PLAYER 2 WON!";
}else {
  result.innerHTML = "DRAW!";
}


document.getElementById("btn").innerHTML = "Start again";
}

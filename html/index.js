


document.getElementById("btn").addEventListener("click", dice);
let pOneNum = document.getElementById("pOne");
let pTwoNum = document.getElementById("pTwo");
let result = document.getElementById("announce");

function dice() {

let pOResult = pOneNum.innerHTML = Math.floor(Math.random() * 10) + 1;
let pTResult = pTwoNum.innerHTML = Math.floor(Math.random() * 10) + 1;

if(pOResult > pTResult){
  result.innerHTML = "PLAYER 1 WON!";
}else if(pOResult < pTResult) {
  result.innerHTML = "PLAYER 2 WON!";
}else {
  result.innerHTML = "OH NOOO, DO IT AGAIN!"
}

}

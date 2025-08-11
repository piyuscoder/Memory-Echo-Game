let gameSeq = [];
let userSeq = [];
let btns = ["green", "yellow", "blue", "red"];
let start = false;
let level = 0;
let h2 = document.querySelector("h2");

function startgame() {
  if (!start) {
    start = true;
    levelUp();
  }
}

document.addEventListener("keypress", startgame);
document.addEventListener("touchstart", startgame);

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randIndx = Math.floor(Math.random() * 3);
  let randColor = btns[randIndx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  gameFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b> ${level}</b><br>Press any key/touch to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "white";
    }, 250);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  start = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}

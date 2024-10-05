let winCountyou = 0;
let winCountcomp = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const count1 = document.querySelector("#count1");
const count2 = document.querySelector("#count2");

const gencompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * 3);
  return options[random];
};

const drawGame = () => {
  msg.innerText = "GAME WAS DRAW. PLAY AGAIN";
  msg.style.backgroundColor = "black";
};

 const winner = (userWin, userChoice, compChoice)=>{
  if (userWin) {
    winCountyou++;
    count1.innerText = winCountyou;
    msg.innerText = `YOU WIN! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    winCountcomp++;
    count2.innerText = winCountcomp;
    msg.innerText =  `YOU LOST. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
 }

const playGame = (userChoice) => {
  const compChoice = gencompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    winner(userWin, userChoice, compChoice);
  }
};

choice.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

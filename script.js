let userscore = 0;
let compscore = 0;

let userscorepara = document.querySelector("#uscore");
let compscorepara = document.querySelector("#cscore");
let choices = document.querySelectorAll('.choice');
let msg = document.querySelector("#msg");

let gencompchoice = () => {
  let options = ["rock","paper","scissors"];
  let ranIndex = Math.floor(Math.random() * 3);
  return options[ranIndex];
}

let drawgame = (userchoice, compchoice) => {
  msg.innerText = `It's a draw! You both chose ${userchoice}`;
  msg.style.backgroundColor = "blue";
}

let showWinner = (userWin, userchoice, compchoice) => {
  if(userWin){
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = `You Won! ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  }
  else{
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText = `You Lost! ${compchoice} beats ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
}

let playGame = (userchoice) => {
  let compchoice = gencompchoice();

  if(userchoice === compchoice){
    drawgame(userchoice, compchoice);
  }
  else{
    let userWin = true;

    if(userchoice === "rock"){
      userWin = (compchoice === "paper") ? false : true;
    } 
    else if(userchoice === "paper"){
      userWin = (compchoice === "scissors") ? false : true;
    }
    else{
      userWin = (compchoice === "rock") ? false : true;
    }

    showWinner(userWin, userchoice, compchoice);
  }
}

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    let userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});

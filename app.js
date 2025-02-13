let compScore = 0;
let userScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#userScore");
let compScorePara = document.querySelector("#compScore");
let reset = document.querySelector("#reset");
let user = document.querySelector("#user");
let userName = document.querySelector(".name");
let ok = document.querySelector("#ok");

const genComp = () => {
    const options = ["rock","paper","scissor"];
    //Generate random function
    const inx = Math.floor(Math.random()*3);
    return options[inx];
}

// let userName = prompt("Enter your name:");
// user.innerText = userName;
// ok.addEventListener("click", () => {
//     userName.classList.remove(userName);
// }) 

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("you win");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice.toUpperCase()} beats ${compChoice.toUpperCase()}`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("you lose");
        compScore++;
        compScorePara.innerText = compScore;
        console.log(compChoice);
        msg.innerText = `You lost. ${compChoice.toUpperCase()} beats your ${userChoice.toUpperCase()}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("your choice",userChoice);
    const compChoice = genComp();
    console.log("comp choice",compChoice);

    if(userChoice == compChoice){
        console.log("game was draw");
        msg.innerText = "Game was draw";
        msg.style.backgroundColor = "rgb(8, 8, 57)";
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
      
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

reset.addEventListener("click", () => {
    compScorePara.innerText = "0";
    userScorePara.innerText = "0";
    userScore = 0;
    compScore = 0;
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "rgb(8, 8, 57)";
})

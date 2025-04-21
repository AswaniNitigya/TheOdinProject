let computerValue;
let UserValue;

//object creation for storing values of result
let result = JSON.parse(localStorage.getItem('result'))
if (!result) {
  result = {
      userWon: 0,
      computerWon: 0,
      tiedResult: 0
  };
}

function resetScore(){
  localStorage.removeItem('result');
  result = {
    userWon: 0,
    computerWon: 0,
    tiedResult: 0
  };

  showResult();
}
 
// user value
function rock() {
  UserValue = "rock";
}
function paper() {
  UserValue = "paper";
}
function scissor() {
  UserValue = "scissor";
}


function randomValue(){
  let ran = Math.random();

  if (ran >= 0 && ran < 1 / 3) {
    return "rock";
  } else if (ran >= 1 / 3 && ran < 2 / 3) {
    return "paper";
  } else {
    return "scissor";
  }
}

function judge() {
  //computer value determine with
  computerValue=randomValue();

  //judging condition
  if (UserValue == computerValue) {
    result.tiedResult++;
    document.querySelector('.js-result').innerHTML= `User: ${UserValue} Computer: ${computerValue} <br>therefore tied<br>
       User won : ${result.userWon}  Computer won: ${result.computerWon}  tied: ${result.tiedResult}`;
       localStorage.setItem('result',JSON.stringify(result));
  }
   else if (
    (UserValue == "rock" && computerValue == "paper") ||
    (UserValue == "paper" && computerValue == "scissor") ||
    (UserValue == "scissor" && computerValue == "rock")
  ) {
    result.computerWon++;
    document.querySelector('.js-result').innerHTML=
      `User: ${UserValue} Computer: ${computerValue}<br>therefore computer win<br>
      User won : ${result.userWon}  Computer won: ${result.computerWon}  tied: ${result.tiedResult}`;
      localStorage.setItem('result',JSON.stringify(result));
  } else {
    result.userWon++;
    document.querySelector('.js-result').innerHTML=`User: ${UserValue} Computer: ${computerValue}<br>therefore user win<br>
        User won : ${result.userWon}  Computer won: ${result.computerWon}  tied: ${result.tiedResult}`;
        localStorage.setItem('result',JSON.stringify(result));
  }
}

function showResult() {
  
  document.querySelector('.js-result').innerHTML=`User won : ${result.userWon}  Computer won: ${result.computerWon}  tied: ${result.tiedResult}`
}

let isAutoplayRunning=false;
let intervalId;
function autoPlayClick(){

  if(isAutoplayRunning===false){
    intervalId=setInterval(autoPlay,1000);
    isAutoplayRunning=true;
  }

  else {
    clearInterval(intervalId)
    isAutoplayRunning=false;
  }
}

function autoPlay(){
  UserValue=randomValue();
  judge();

}

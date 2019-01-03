const first = document.getElementById("horse1");
const second = document.getElementById("horse2");
const third = document.getElementById("horse3");
const fourth = document.getElementById("horse4");
const fifth = document.getElementById("horse5");
let horse1speed;
let horse2speed;
let horse3speed;
let horse4speed;
let horse5speed;

var results = [];
// let winnerIs = result;
// let resultList = document.getElementById("demo");
// resultList.innerHTML=result + "\n";

// let all ={first:'', second:'', third:'',fourth:'', fifth:''}
var allHorses = [];




function startRun() {
  alert("The race is going to start...");
  document.getElementById("start-btn").style.display="none";
  horse1speed = Math.floor(Math.random() * 5);
  horse2speed = Math.floor(Math.random() * 5) + 2;
  horse3speed = Math.floor(Math.random() * 5) + 1;
  horse4speed = Math.floor(Math.random() * 5) + 1;
  horse5speed = Math.floor(Math.random() * 5);
  horse1();
  horse2();
  horse3();
  horse4();
  horse5();
  winList();
  
  
  
}

function winList() {
  let winner;

  if (horse1speed < horse2speed
    && horse1speed < horse3speed
    && horse1speed < horse4speed
    && horse1speed < horse5speed) {
    winner = "The winner is 1 Dorcho";
  } else if (horse2speed < horse1speed
    && horse2speed < horse3speed
    && horse2speed < horse4speed
    && horse2speed < horse5speed) {
    winner = "The winner is 2 Dorcho";
  } else if (horse3speed < horse1speed
    && horse3speed < horse2speed
    && horse3speed < horse4speed
    && horse3speed < horse5speed) {
    winner = "The winner is 3 Dorcho";
  } else if (horse4speed < horse1speed
    && horse4speed < horse2speed
    && horse4speed < horse3speed
    && horse4speed < horse5speed) {
    winner = "The winner is 4 Dorcho";
  } else if (horse5speed < horse1speed
    && horse5speed < horse2speed
    && horse5speed < horse3speed
    && horse5speed < horse4speed) {
    winner = "The winner is 5 Dorcho";
  }
  let finish = results;
  finish.push(winner);
  let list = document.getElementById('demo').innerHTML = finish;
  
  // console.log(finish);

  
}
function endRace(){
  let numbHorses = allHorses;

  if (numbHorses.length == 5){
    //All horse arrived, enable again the Start Button
    document.getElementById("start-btn").style.display="block";
  }
}



function horse1() {
  
  // horse.src = "giphy_s.gif";
  var pos = 0;
  var id = setInterval(frame, horse1speed);
  function frame() {
    if (pos == 900) {
      
      first.style.left = 0;
      clearInterval(id);
      allHorses.push("1 Dorcho");
      // let prv = "dorko";
      // all.first = prv;

      // let num = document.getElementById("win-msg");
      // num.innerText = "no 1";
      endRace();

    } else {
      pos++;
      first.style.left = pos + "px";

    }
  }
}


function horse2() {
  // var horse = document.getElementById("horse2");
  var pos = 0;
  var id = setInterval(frame, horse2speed);
  function frame() {
    if (pos == 900) {
      second.style.left = 0;
      clearInterval(id);
      allHorses.push("2 Dorcho");
      endRace();
    } else {
      pos++;
      second.style.left = pos + "px";
    }
  }
}

function horse3() {
  // var horse = document.getElementById("horse3");
  var pos = 0;
  var id = setInterval(frame, horse3speed);
  function frame() {
    if (pos == 900) {
      third.style.left = 0;
      clearInterval(id);
      allHorses.push("3 Dorcho");
      endRace();
    } else {
      pos++;
      third.style.left = pos + "px";

    }
  }
}
function horse4() {
  // var horse = document.getElementById("horse4");
  var pos = 0;
  var id = setInterval(frame, horse4speed);
  function frame() {
    if (pos == 900) {
     
      fourth.style.left = 0;
      clearInterval(id);
      allHorses.push("4 Dorcho");
      endRace();
    } else {
      pos++;
      fourth.style.left = pos + "px";

    }
  }
}

function horse5() {
  // var horse = document.getElementById("horse5");
  var pos = 0;
  var id = setInterval(frame, horse5speed);
  function frame() {

    if (pos == 900) { 
      fifth.style.left = 0;
      clearInterval(id);
      allHorses.push("5 Dorcho");
      endRace();
    } else {
      pos++;
      fifth.style.left = pos + "px";

    }
  }
  
}



function show(){
  let all = allHorses;
  let horsess;
  for (let i = 0; i < all.length; i++) {
    horsess = all[i];
    console.log(horsess);
  }
}

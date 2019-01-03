const first = document.getElementById("horse1");
const second = document.getElementById("horse2");
const third = document.getElementById("horse3");
const Fourth = document.getElementById("horse4");
const Fifth = document.getElementById("horse5");
let horse1speed;
let horse2speed;
let horse3speed;
let horse4speed;
let horse5speed;

let result = [];
let resultList = document.getElementById("demo");

let all ={first:'', second:'', third:'',fourth:'', fifth:''}
let allHorses = [];




function startRun() {
  alert("The race is going to start...");
  horse1speed = Math.floor(Math.random() * 5) + 2;
  horse2speed = Math.floor(Math.random() * 5) + 2;
  horse3speed = Math.floor(Math.random() * 5) + 2;
  horse4speed = Math.floor(Math.random() * 5) + 2;
  horse5speed = Math.floor(Math.random() * 5) + 2;
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
  result.push(winner);
  console.log(result);
  
}


function horse1() {
  // var horse = first;
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

    } else {
      pos++;
      first.style.left = pos + "px";

    }
  }
}


function horse2() {
  var horse = document.getElementById("horse2");
  var pos = 0;
  var id = setInterval(frame, horse2speed);
  function frame() {
    if (pos == 900) {
      horse.style.left = 0;
      clearInterval(id);
      allHorses.push("2 Dorcho");
    } else {
      pos++;
      horse.style.left = pos + "px";
    }
  }
}

function horse3() {
  var horse = document.getElementById("horse3");
  var pos = 0;
  var id = setInterval(frame, horse3speed);
  function frame() {
    if (pos == 900) {
      horse.style.left = 0;
      clearInterval(id);
      allHorses.push("3 Dorcho");
    } else {
      pos++;
      horse.style.left = pos + "px";

    }
  }
}
function horse4() {
  var horse = document.getElementById("horse4");
  var pos = 0;
  var id = setInterval(frame, horse4speed);
  function frame() {
    if (pos == 900) {
      allHorses.push("4 Dorcho");
      horse.style.left = 0;
      clearInterval(id);
    } else {
      pos++;
      horse.style.left = pos + "px";

    }
  }
}

function horse5() {
  var horse = document.getElementById("horse5");
  var pos = 0;
  var id = setInterval(frame, horse5speed);
  function frame() {

    if (pos == 900) {
      allHorses.push("5 Dorcho");
      horse.style.left = 0;
      clearInterval(id);
      
    } else {
      pos++;
      horse.style.left = pos + "px";

    }
  }
  
}

function show(){
  let horsesvv;
  for (var i = 0; i < 5; i++) {
    horsesvv = allHorses[i];
    console.log(horsesvv);
  }
}

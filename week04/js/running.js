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
  document.getElementById("start-btn").style.display = "none";
  horse1speed = Math.floor((Math.random() * 10) + 1);
  horse2speed = Math.floor((Math.random() * 10) + 1);
  horse3speed = Math.floor((Math.random() * 10) + 1);
  horse4speed = Math.floor((Math.random() * 10) + 1);
  horse5speed = Math.floor((Math.random() * 10) + 1);
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
    winner = "The winner is Spirit";
  } else if (horse2speed < horse1speed
    && horse2speed < horse3speed
    && horse2speed < horse4speed
    && horse2speed < horse5speed) {
    winner = "The winner is Sharac";
  } else if (horse3speed < horse1speed
    && horse3speed < horse2speed
    && horse3speed < horse4speed
    && horse3speed < horse5speed) {
    winner = "The winner is Marko";
  } else if (horse4speed < horse1speed
    && horse4speed < horse2speed
    && horse4speed < horse3speed
    && horse4speed < horse5speed) {
    winner = "The winner is Belco";
  } else if (horse5speed < horse1speed
    && horse5speed < horse2speed
    && horse5speed < horse3speed
    && horse5speed < horse4speed) {
    winner = "The winner is Bukefal";
  }else{
    winner = "Two horses are winner";
  }
  let finish = results;
  finish.push(winner);
  // console.log(finish);
}

let k = 1;
var i=0;
function endRace() {
  let numbHorses = allHorses;
  if (numbHorses.length == k * 5) {
    //All horse arrived, enable again the Start Run Button
    document.getElementById("start-btn").style.display = "block";
    showResult();
    // for(i; i<results.length; i++){
    //   let list = document.getElementById('demo').innerHTML = results[i] +"\n";
    // }
    k++;
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
      allHorses.push("Spirit");
      // let prv = "dorko";
      // all.first = prv;
      endRace();
    } else {
      pos++;
      first.style.left = pos + "px";

    }
  }
}

function horse2() {
  var pos = 0;
  var id = setInterval(frame, horse2speed);
  function frame() {
    if (pos == 900) {
      second.style.left = 0;
      clearInterval(id);
      allHorses.push("Sharac");
      endRace();
    } else {
      pos++;
      second.style.left = pos + "px";
    }
  }
}

function horse3() {
  var pos = 0;
  var id = setInterval(frame, horse3speed);
  function frame() {
    if (pos == 900) {
      third.style.left = 0;
      clearInterval(id);
      allHorses.push("Marko");
      endRace();
    } else {
      pos++;
      third.style.left = pos + "px";

    }
  }
}
function horse4() {
  var pos = 0;
  var id = setInterval(frame, horse4speed);
  function frame() {
    if (pos == 900) {

      fourth.style.left = 0;
      clearInterval(id);
      allHorses.push("Belco");
      endRace();
    } else {
      pos++;
      fourth.style.left = pos + "px";

    }
  }
}

function horse5() {
  var pos = 0;
  var id = setInterval(frame, horse5speed);
  function frame() {

    if (pos == 900) {
      fifth.style.left = 0;
      clearInterval(id);
      allHorses.push("Bukefal");
      endRace();
    } else {
      pos++;
      fifth.style.left = pos + "px";
    }
  }

}



function showResult() {
  let all = allHorses;
  // let horsess;
  // let resList = results;
  for (let i = 0; i < all.length; i++) {
    // horsess = all[i];
    let list = document.getElementById('prv').innerText = all[0];
    let list1 = document.getElementById('vtor').innerText = all[1];
    let list2 = document.getElementById('tret').innerText = all[2];
    let list3 = document.getElementById('cetvrt').innerText = all[3];
    let list4 = document.getElementById('petti').innerText = all[4];
    console.log(all[i]);
  }
}

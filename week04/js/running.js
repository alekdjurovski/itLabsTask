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
var allHorses = [];

function removeRaceList() {
  allHorses.length = 0;
}


function startRun() {
  removeRaceList();
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
}

var i = 0;
function endRace() {
  let numbHorses = allHorses;
  if (numbHorses.length == 5) {
    //enable Start Run Button
    document.getElementById("start-btn").style.display = "block";
    showResult();
    winners();
  }
}

function horse1() {

  first.src = "./img/spiritRun.gif";
  var pos = 0;
  var id = setInterval(frame, horse1speed);
  function frame() {
    if (pos == 900) {
      first.src = "./img/spirit.png";
      first.style.left = 0;
      clearInterval(id);
      allHorses.push("Spirit");
      endRace();
    } else {
      pos++;
      first.style.left = pos + "px";

    }
  }
}

function horse2() {
  second.src = "./img/sparkRun.gif";
  var pos = 0;
  var id = setInterval(frame, horse2speed);
  function frame() {
    if (pos == 900) {
      second.src = "./img/spark.png";
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
  third.src = "./img/markoRun.gif";
  var pos = 0;
  var id = setInterval(frame, horse3speed);
  function frame() {
    if (pos == 900) {
      third.src = "./img/marko.png";
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
  fourth.src = "./img/belcoRun.gif";
  var pos = 0;
  var id = setInterval(frame, horse4speed);
  function frame() {
    if (pos == 900) {
      fourth.src = "./img/belco.png";
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
  fifth.src = "./img/bukefalRun.gif";
  var pos = 0;
  var id = setInterval(frame, horse5speed);
  function frame() {
    if (pos == 900) {
      fifth.src = "./img/bukefal.png";
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
let list;
let winn;

function showResult() {
  list = document.getElementById('prv').innerText ="1. " + allHorses[0];
  let list1 = document.getElementById('vtor').innerText ="2. " + allHorses[1];
  let list2 = document.getElementById('tret').innerText ="3. " + allHorses[2];
  let list3 = document.getElementById('cetvrt').innerText = "4. " +allHorses[3];
  let list4 = document.getElementById('petti').innerText = "5. " +allHorses[4];
}


function winners() {
  results.push(list);
  document.getElementById('prva-trka').innerText ="Winner is " + results[0];
  document.getElementById('vtora-trka').innerText ="Winner is " + results[1];
  document.getElementById('treta-trka').innerText ="Winner is " + results[2];
  document.getElementById('cetvrta-trka').innerText ="Winner is " + results[3];
  document.getElementById('petta-trka').innerText ="Winner is " + results[4];
}

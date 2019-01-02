function startRun() {
 
  horse1();
  horse2();
  horse3();
  horse4();
  horse5();

}

function horse1() {
  var horse = document.getElementById("horse1");
  var pos = 0;
  var speed = Math.floor(Math.random() * 10) + 1;
  var id = setInterval(frame, speed);
  function frame() {
    if (pos == 900) {
      clearInterval(id);
    } else {
      pos++;
      horse.style.left = pos + "px";

    }
  }
}

function horse2() {
  var horse = document.getElementById("horse2");

  var pos = 0;
  var speed = Math.floor(Math.random() * 10) + 1;
  var id = setInterval(frame, speed);
  function frame() {
    if (pos == 900) {
      clearInterval(id);
    } else {
      pos++;
      horse.style.left = pos + "px";
    }
  }
}

function horse3() {
  var horse3 = document.getElementById("horse3");

  var pos = 0;
  var speed = Math.floor(Math.random() * 10) + 1;
  var id = setInterval(frame, speed);
  function frame() {
    if (pos == 900) {
      clearInterval(id);
    } else {
      pos++;
      horse3.style.left = pos + "px";

    }
  }
}


function horse4() {
  var horse = document.getElementById("horse4");

  var pos = 0;
  var speed = Math.floor(Math.random() * 10) + 1;
  var id = setInterval(frame, speed);
  function frame() {
    if (pos == 900) {
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
  var speed = Math.floor(Math.random() * 10) + 1;
  var id = setInterval(frame, speed);
  function frame() {
    if (pos == 900) {
      clearInterval(id);
    } else {
      pos++;
      horse.style.left = pos + "px";

    }
  }
}
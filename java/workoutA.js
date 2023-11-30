function startWorkoutA() {
    document.getElementById('jumpRope').style.display = "block";
    document.getElementById('startWorkoutA').style.display = "none";

}

function jumpRope() {
    document.getElementById('jumpRope').style.display = "block";
    document.getElementById('situp').style.display = "none";
}

function situps() {
    document.getElementById('situp').style.display = "block";
    document.getElementById('jumpRope').style.display = "none";
    document.getElementById('bandedSideWalk').style.display = "none";
}

function bandedSideWalk() {
    document.getElementById('bandedSideWalk').style.display = "block";
    document.getElementById('situp').style.display = "none";
    document.getElementById('gobletSquats').style.display = "none";
}

function gobletSquats() {
    document.getElementById('gobletSquats').style.display = "block";
    document.getElementById('bandedSideWalk').style.display = "none";
    document.getElementById('pushUps').style.display = "none";
}

function pushUps() {
    document.getElementById('pushUps').style.display = "block";
    document.getElementById('gobletSquats').style.display = "none";
    document.getElementById('weightedCrossoverLunges').style.display = "none";
}

function weightedCrossoverLunges() {
    document.getElementById('weightedCrossoverLunges').style.display = "block";
    document.getElementById('pushUps').style.display = "none";
    document.getElementById('pullUps').style.display = "none";
}

function pullUps() {
    document.getElementById('pullUps').style.display = "block";
    document.getElementById('weightedCrossoverLunges').style.display = "none";
    document.getElementById('gluteBridges').style.display = "none";
}

function gluteBridges() {
    document.getElementById('gluteBridges').style.display = "block";
    document.getElementById('pullUps').style.display = "none";
    document.getElementById('splitSquats').style.display = "none";
}

function splitSquats() {
    document.getElementById('splitSquats').style.display = "block";
    document.getElementById('gluteBridges').style.display = "none";
    document.getElementById('plank').style.display = "none";
}

function plank() {
    document.getElementById('plank').style.display = "block";
    document.getElementById('splitSquats').style.display = "none";
    document.getElementById('finishedWorkout').style.display = "none";
}

function finishedWorkout() {
    document.getElementById('finishedWorkout').style.display = "block";
    document.getElementById('plank').style.display = "none";
}

function finishedWorkoutCelebration() {
    document.getElementById('complete-workout-header-id').style.display = "block";
    document.getElementById('workout-finished').style.border = "1px solid rgb(60, 238, 0)";
    document.getElementById('workout-finished').style.backgroundColor = "rgba(30, 255, 0, 0.59)";
    document.getElementById('check-workout-finished').style.color = "rgb(0, 202, 27)";
}


// Jump Rope Timer
function startjumpRopeTimer() {
    var duration = 2 * 60; // 2 minutes in seconds
    var display = document.getElementById('jumpRopeTimer');

    var jumpRopeTimer = duration, minutes, seconds;
    setInterval(function () {
      minutes = parseInt(jumpRopeTimer / 60, 10);
      seconds = parseInt(jumpRopeTimer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--jumpRopeTimer < 0) {
        document.getElementById('jumpRopeTimer').innerHTML = '00:00';
      }
    }, 1000);
  }

// Plank Timer
function startplankTimer() {
    var duration = 2 * 60; // 2 minutes in seconds
    var display = document.getElementById('plankTimer');

    var plankTimer = duration, minutes, seconds;
    setInterval(function () {
      minutes = parseInt(plankTimer / 60, 10);
      seconds = parseInt(plankTimer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--plankTimer < 0) {
        document.getElementById('plankTimer').innerHTML = '00:00'
      }
    }, 1000);
  }
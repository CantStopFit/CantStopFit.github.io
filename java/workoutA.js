function jumpRope() {
  //Item Removal/Addition
  document.getElementById('workout-activity-2').style.display = "none";
  document.getElementById('workout-activity-1').style.display = "flex";
  //Progress Bar
  document.getElementById('progress-item-1').classList.add('active');
  document.getElementById('progress-item-1').classList.remove('past');
  document.getElementById('progress-item-2').classList.remove('active');
  //Advancement Bar
  document.getElementById('advance-bar-2').classList.remove('active-btn');
  document.getElementById('advance-bar-1').classList.add('active-btn');
  //Back Buttons
  document.getElementById('back-btn-1').style.display = "none";
  document.getElementById('fakeBack').style.display = "block"
  //Forward Buttons
  document.getElementById('continue-btn-1').style.display = "block";
  document.getElementById('continue-btn-2').style.display = "none";
}
function situp() {
    //Item Removal/Addition
    document.getElementById('workout-activity-2').style.display = "flex";
    document.getElementById('workout-activity-1').style.display = "none";
    document.getElementById('workout-activity-3').style.display = "none";
    //Progress Bar
    document.getElementById('progress-item-1').classList.remove('active');
    document.getElementById('progress-item-1').classList.add('past');
    document.getElementById('progress-item-2').classList.add('active');
    document.getElementById('progress-item-2').classList.remove('past');
    document.getElementById('progress-item-3').classList.remove('active');
    //Advancement Bar
    document.getElementById('advance-bar-2').classList.add('active-btn');
    document.getElementById('advance-bar-1').classList.remove('active-btn');
    document.getElementById('advance-bar-3').classList.remove('active-btn');
    //Back Buttons
    document.getElementById('back-btn-1').style.display = "block";
    document.getElementById('fakeBack').style.display = "none";
    document.getElementById('back-btn-2').style.display = "none";
    //Forward Buttons
    document.getElementById('continue-btn-1').style.display = "none";
    document.getElementById('continue-btn-2').style.display = "block";
    document.getElementById('continue-btn-3').style.display = "none";
}
function bandedSideWalk() {
  //Item Removal/Addition
  document.getElementById('workout-activity-2').style.display = "none";
  document.getElementById('workout-activity-4').style.display = "none";
  document.getElementById('workout-activity-3').style.display = "flex"
  //Progress Bar
  document.getElementById('progress-item-2').classList.remove('active');
  document.getElementById('progress-item-2').classList.add('past');
  document.getElementById('progress-item-3').classList.add('active');
  document.getElementById('progress-item-3').classList.remove('past');
  document.getElementById('progress-item-4').classList.remove('active');
  //Advancement Bar
  document.getElementById('advance-bar-2').classList.remove('active-btn');
  document.getElementById('advance-bar-4').classList.remove('active-btn');
  document.getElementById('advance-bar-3').classList.add('active-btn');
  //Back Buttons
  document.getElementById('back-btn-3').style.display = "none";
  document.getElementById('back-btn-1').style.display = "none";
  document.getElementById('back-btn-2').style.display = "block"
  //Forward Buttons
  document.getElementById('continue-btn-3').style.display = "block";
  document.getElementById('continue-btn-2').style.display = "none";
  document.getElementById('continue-btn-4').style.display = "none";
  //Stage
  document.getElementById('exercise-stage').style.display = "none";
  document.getElementById('warmup-stage').style.display = "block";
}
function gobletSquat() {
  //Item Removal/Addition
  document.getElementById('workout-activity-5').style.display = "none";
  document.getElementById('workout-activity-4').style.display = "flex";
  document.getElementById('workout-activity-3').style.display = "none"
  //Progress Bar
  document.getElementById('progress-item-3').classList.remove('active');
  document.getElementById('progress-item-3').classList.add('past');
  document.getElementById('progress-item-4').classList.add('active');
  document.getElementById('progress-item-4').classList.remove('past');
  document.getElementById('progress-item-5').classList.remove('active');
  //Advancement Bar
  document.getElementById('advance-bar-5').classList.remove('active-btn');
  document.getElementById('advance-bar-4').classList.add('active-btn');
  document.getElementById('advance-bar-3').classList.remove('active-btn');
  //Back Buttons
  document.getElementById('back-btn-3').style.display = "block";
  document.getElementById('back-btn-4').style.display = "none";
  document.getElementById('back-btn-2').style.display = "none";
  //Forward Buttons
  document.getElementById('continue-btn-3').style.display = "none";
  document.getElementById('continue-btn-4').style.display = "block";
  document.getElementById('continue-btn-5').style.display = "none";
  //Stage
  document.getElementById('exercise-stage').style.display = "block";
  document.getElementById('warmup-stage').style.display = "none";
}
function pushups() {
  //Item Removal/Addition
  document.getElementById('workout-activity-5').style.display = "flex";
  document.getElementById('workout-activity-4').style.display = "none";
  document.getElementById('workout-activity-6').style.display = "none"
  //Progress Bar
  document.getElementById('progress-item-4').classList.remove('active');
  document.getElementById('progress-item-4').classList.add('past');
  document.getElementById('progress-item-5').classList.add('active');
  document.getElementById('progress-item-5').classList.remove('past');
  document.getElementById('progress-item-6').classList.remove('active');
  //Advancement Bar
  document.getElementById('advance-bar-5').classList.add('active-btn');
  document.getElementById('advance-bar-4').classList.remove('active-btn');
  document.getElementById('advance-bar-6').classList.remove('active-btn');
  //Back Buttons
  document.getElementById('back-btn-3').style.display = "none";
  document.getElementById('back-btn-4').style.display = "block";
  document.getElementById('back-btn-5').style.display = "none";
  //Forward Buttons
  document.getElementById('continue-btn-5').style.display = "block";
  document.getElementById('continue-btn-4').style.display = "none";
  document.getElementById('continue-btn-6').style.display = "none";
}
function weightedCrossoverLunge() {
  //Item Removal/Addition
  document.getElementById('workout-activity-5').style.display = "none";
  document.getElementById('workout-activity-7').style.display = "none";
  document.getElementById('workout-activity-6').style.display = "flex"
  //Progress Bar
  document.getElementById('progress-item-5').classList.remove('active');
  document.getElementById('progress-item-5').classList.add('past');
  document.getElementById('progress-item-6').classList.add('active');
  document.getElementById('progress-item-6').classList.remove('past');
  document.getElementById('progress-item-7').classList.remove('active');
  //Advancement Bar
  document.getElementById('advance-bar-5').classList.remove('active-btn');
  document.getElementById('advance-bar-7').classList.remove('active-btn');
  document.getElementById('advance-bar-6').classList.add('active-btn');
  //Back Buttons
  document.getElementById('back-btn-6').style.display = "none";
  document.getElementById('back-btn-4').style.display = "none";
  document.getElementById('back-btn-5').style.display = "block";
  //Forward Buttons
  document.getElementById('continue-btn-5').style.display = "none";
  document.getElementById('continue-btn-7').style.display = "none";
  document.getElementById('continue-btn-6').style.display = "block";
}
function pullups() {
  //Item Removal/Addition
  document.getElementById('workout-activity-8').style.display = "none";
  document.getElementById('workout-activity-7').style.display = "flex";
  document.getElementById('workout-activity-6').style.display = "none"
  //Progress Bar
  document.getElementById('progress-item-6').classList.remove('active');
  document.getElementById('progress-item-6').classList.add('past');
  document.getElementById('progress-item-7').classList.add('active');
  document.getElementById('progress-item-7').classList.remove('past');
  document.getElementById('progress-item-8').classList.remove('active');
  //Advancement Bar
  document.getElementById('advance-bar-8').classList.remove('active-btn');
  document.getElementById('advance-bar-7').classList.add('active-btn');
  document.getElementById('advance-bar-6').classList.remove('active-btn');
  //Back Buttons
  document.getElementById('back-btn-6').style.display = "block";
  document.getElementById('back-btn-7').style.display = "none";
  document.getElementById('back-btn-5').style.display = "none";
  //Forward Buttons
  document.getElementById('continue-btn-8').style.display = "none";
  document.getElementById('continue-btn-7').style.display = "block";
  document.getElementById('continue-btn-6').style.display = "none";
}
function gluteBridge() {
  //Item Removal/Addition
  document.getElementById('workout-activity-8').style.display = "flex";
  document.getElementById('workout-activity-7').style.display = "none";
  document.getElementById('workout-activity-9').style.display = "none"
  //Progress Bar
  document.getElementById('progress-item-7').classList.remove('active');
  document.getElementById('progress-item-7').classList.add('past');
  document.getElementById('progress-item-8').classList.add('active');
  document.getElementById('progress-item-8').classList.remove('past');
  document.getElementById('progress-item-9').classList.remove('active');
  //Advancement Bar
  document.getElementById('advance-bar-8').classList.add('active-btn');
  document.getElementById('advance-bar-7').classList.remove('active-btn');
  document.getElementById('advance-bar-9').classList.remove('active-btn');
  //Back Buttons
  document.getElementById('back-btn-6').style.display = "none";
  document.getElementById('back-btn-7').style.display = "block";
  document.getElementById('back-btn-8').style.display = "none";
  //Forward Buttons
  document.getElementById('continue-btn-8').style.display = "block";
  document.getElementById('continue-btn-7').style.display = "none";
  document.getElementById('continue-btn-9').style.display = "none";
}
function splitSquat() {
  //Item Removal/Addition
  document.getElementById('workout-activity-8').style.display = "none";
  document.getElementById('workout-activity-10').style.display = "none";
  document.getElementById('workout-activity-9').style.display = "flex"
  //Progress Bar
  document.getElementById('progress-item-8').classList.remove('active');
  document.getElementById('progress-item-8').classList.add('past');
  document.getElementById('progress-item-9').classList.add('active');
  document.getElementById('progress-item-9').classList.remove('past');
  document.getElementById('progress-item-10').classList.remove('active');
  //Advancement Bar
  document.getElementById('advance-bar-8').classList.remove('active-btn');
  document.getElementById('advance-bar-10').classList.remove('active-btn');
  document.getElementById('advance-bar-9').classList.add('active-btn');
  //Back Buttons
  document.getElementById('back-btn-9').style.display = "none";
  document.getElementById('back-btn-7').style.display = "none";
  document.getElementById('back-btn-8').style.display = "block";
  //Forward Buttons
  document.getElementById('continue-btn-9').style.display = "block";
  document.getElementById('continue-btn-8').style.display = "none";
  document.getElementById('finishedWorkout').style.display = "none";
  //Stage
  document.getElementById('exercise-stage').style.display = "block";
  document.getElementById('cool-down-stage').style.display = "none";
}
function plank() {
  //Item Removal/Addition
  document.getElementById('workout-activity-10').style.display = "flex";
  document.getElementById('workout-activity-9').style.display = "none"
  //Progress Bar
  document.getElementById('progress-item-9').classList.remove('active');
  document.getElementById('progress-item-9').classList.add('past');
  document.getElementById('progress-item-10').classList.add('active');
  document.getElementById('progress-item-10').classList.remove('past');
  //Advancement Bar
  document.getElementById('advance-bar-9').classList.remove('active-btn');
  document.getElementById('advance-bar-10').classList.add('active-btn');
  //Back Buttons
  document.getElementById('back-btn-9').style.display = "block";
  document.getElementById('back-btn-8').style.display = "none";
  //Forward Buttons
  document.getElementById('continue-btn-9').style.display = "none";
  document.getElementById('finishedWorkout').style.display = "block";
  //Stage
  document.getElementById('exercise-stage').style.display = "none";
  document.getElementById('cool-down-stage').style.display = "block";
}
//Workout Stopwatch
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
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
      //Plank Timer
      function startPlankTimer() {
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
            document.getElementById('plankTimer').innerHTML = '00:00';
          }
        }, 1000);
      }

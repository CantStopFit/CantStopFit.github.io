function gotoWorkoutActivity1() {
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
function gotoWorkoutActivity2() {
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
function gotoWorkoutActivity3() {
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
function gotoWorkoutActivity4() {
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
function gotoWorkoutActivity5() {
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
function gotoWorkoutActivity6() {
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
function gotoWorkoutActivity7() {
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
function gotoWorkoutActivity8() {
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
function gotoWorkoutActivity9() {
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
function gotoWorkoutActivity10() {
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
function finishedWorkout() {
  //Progress Bar
  document.getElementById('progress-item-1').classList.remove('past');
  document.getElementById('progress-item-1').classList.add('finished');
  document.getElementById('progress-item-2').classList.remove('past');
  document.getElementById('progress-item-2').classList.add('finished');
  document.getElementById('progress-item-3').classList.remove('past');
  document.getElementById('progress-item-3').classList.add('finished');
  document.getElementById('progress-item-4').classList.remove('past');
  document.getElementById('progress-item-4').classList.add('finished');
  document.getElementById('progress-item-5').classList.remove('past');
  document.getElementById('progress-item-5').classList.add('finished');
  document.getElementById('progress-item-6').classList.remove('past');
  document.getElementById('progress-item-6').classList.add('finished');
  document.getElementById('progress-item-7').classList.remove('past');
  document.getElementById('progress-item-7').classList.add('finished');
  document.getElementById('progress-item-8').classList.remove('past');
  document.getElementById('progress-item-8').classList.add('finished');
  document.getElementById('progress-item-9').classList.remove('past');
  document.getElementById('progress-item-9').classList.add('finished');
  document.getElementById('progress-item-10').classList.remove('past');
  document.getElementById('progress-item-10').classList.add('finished');
  //Check Icon
  document.getElementById('finishedWorkout').style.color = "rgba(88, 255, 96, 0.8)";
  //Back Icon
  document.getElementById('back-btn-9').style.display = "none";  
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
      function startworkoutTimer1() {
        var duration = 2 * 60; // 2 minutes in seconds
        var display = document.getElementById('workoutTimer1');

        var workoutTimer1 = duration, minutes, seconds;
        setInterval(function () {
          minutes = parseInt(workoutTimer1 / 60, 10);
          seconds = parseInt(workoutTimer1 % 60, 10);

          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;

          display.textContent = minutes + ":" + seconds;

          if (--workoutTimer1 < 0) {
            document.getElementById('workoutTimer1').innerHTML = '00:00';
          }
        }, 1000);
      }
      //Plank Timer
      function startworkoutTimer2() {
        var duration = 2 * 60; // 2 minutes in seconds
        var display = document.getElementById('workoutTimer2');

        var workoutTimer2 = duration, minutes, seconds;
        setInterval(function () {
          minutes = parseInt(workoutTimer2 / 60, 10);
          seconds = parseInt(workoutTimer2 % 60, 10);

          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;

          display.textContent = minutes + ":" + seconds;

          if (--workoutTimer2 < 0) {
            document.getElementById('workoutTimer2').innerHTML = '00:00';
          }
        }, 1000);
      }

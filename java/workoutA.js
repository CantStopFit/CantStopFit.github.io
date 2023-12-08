function jumpRope() {
  //Item Removal/Addition
  document.getElementById('SitUpItem').style.display = "none";
  document.getElementById('jumpRopeItem').style.display = "flex";
  //Progress Bar
  document.getElementById('jumpRopeProgress').classList.add('active');
  document.getElementById('jumpRopeProgress').classList.remove('past');
  document.getElementById('situpProgress').classList.remove('active');
  //Advancement Bar
  document.getElementById('situpAdvancement').classList.remove('active-btn');
  document.getElementById('jumpRopeAdvancement').classList.add('active-btn');
  //Back Buttons
  document.getElementById('situpBack').style.display = "none";
  document.getElementById('fakeBack').style.display = "block"
  //Forward Buttons
  document.getElementById('jumpRopeContinue').style.display = "block";
  document.getElementById('situpContinue').style.display = "none";
}
function situp() {
    //Item Removal/Addition
    document.getElementById('SitUpItem').style.display = "flex";
    document.getElementById('jumpRopeItem').style.display = "none";
    document.getElementById('bandedSideWalkItem').style.display = "none";
    //Progress Bar
    document.getElementById('jumpRopeProgress').classList.remove('active');
    document.getElementById('jumpRopeProgress').classList.add('past');
    document.getElementById('situpProgress').classList.add('active');
    document.getElementById('situpProgress').classList.remove('past');
    document.getElementById('bandedSideWalkProgress').classList.remove('active');
    //Advancement Bar
    document.getElementById('situpAdvancement').classList.add('active-btn');
    document.getElementById('jumpRopeAdvancement').classList.remove('active-btn');
    document.getElementById('bandedSideWalkAdvancement').classList.remove('active-btn');
    //Back Buttons
    document.getElementById('situpBack').style.display = "block";
    document.getElementById('fakeBack').style.display = "none";
    document.getElementById('bandedSideWalkback').style.display = "none";
    //Forward Buttons
    document.getElementById('jumpRopeContinue').style.display = "none";
    document.getElementById('situpContinue').style.display = "block";
    document.getElementById('bandedSideWalkContinue').style.display = "none";
}
function bandedSideWalk() {
  //Item Removal/Addition
  document.getElementById('SitUpItem').style.display = "none";
  document.getElementById('gobletSquatItem').style.display = "none";
  document.getElementById('bandedSideWalkItem').style.display = "flex"
  //Progress Bar
  document.getElementById('situpProgress').classList.remove('active');
  document.getElementById('situpProgress').classList.add('past');
  document.getElementById('bandedSideWalkProgress').classList.add('active');
  document.getElementById('bandedSideWalkProgress').classList.remove('past');
  document.getElementById('gobletSquatsProgress').classList.remove('active');
  //Advancement Bar
  document.getElementById('situpAdvancement').classList.remove('active-btn');
  document.getElementById('gobletSquatAdvancement').classList.remove('active-btn');
  document.getElementById('bandedSideWalkAdvancement').classList.add('active-btn');
  //Back Buttons
  document.getElementById('gobletSquatBack').style.display = "none";
  document.getElementById('situpBack').style.display = "none";
  document.getElementById('bandedSideWalkback').style.display = "block"
  //Forward Buttons
  document.getElementById('bandedSideWalkContinue').style.display = "block";
  document.getElementById('situpContinue').style.display = "none";
  document.getElementById('gobletSquatContinue').style.display = "none";
  //Stage
  document.getElementById('exercise-stage').style.display = "none";
  document.getElementById('warmup-stage').style.display = "block";
}
function gobletSquat() {
  //Item Removal/Addition
  document.getElementById('pushupItem').style.display = "none";
  document.getElementById('gobletSquatItem').style.display = "flex";
  document.getElementById('bandedSideWalkItem').style.display = "none"
  //Progress Bar
  document.getElementById('bandedSideWalkProgress').classList.remove('active');
  document.getElementById('bandedSideWalkProgress').classList.add('past');
  document.getElementById('gobletSquatsProgress').classList.add('active');
  document.getElementById('gobletSquatsProgress').classList.remove('past');
  document.getElementById('pushUpsProgress').classList.remove('active');
  //Advancement Bar
  document.getElementById('pushUpAdvancement').classList.remove('active-btn');
  document.getElementById('gobletSquatAdvancement').classList.add('active-btn');
  document.getElementById('bandedSideWalkAdvancement').classList.remove('active-btn');
  //Back Buttons
  document.getElementById('gobletSquatBack').style.display = "block";
  document.getElementById('pushupBack').style.display = "none";
  document.getElementById('bandedSideWalkback').style.display = "none";
  //Forward Buttons
  document.getElementById('bandedSideWalkContinue').style.display = "none";
  document.getElementById('gobletSquatContinue').style.display = "block";
  document.getElementById('pushupContinue').style.display = "none";
  //Stage
  document.getElementById('exercise-stage').style.display = "block";
  document.getElementById('warmup-stage').style.display = "none";
}
function pushups() {
  //Item Removal/Addition
  document.getElementById('pushupItem').style.display = "flex";
  document.getElementById('gobletSquatItem').style.display = "none";
  document.getElementById('weightedCrossoverLungesItem').style.display = "none"
  //Progress Bar
  document.getElementById('gobletSquatsProgress').classList.remove('active');
  document.getElementById('gobletSquatsProgress').classList.add('past');
  document.getElementById('pushUpsProgress').classList.add('active');
  document.getElementById('pushUpsProgress').classList.remove('past');
  document.getElementById('weightedCrossoverLungesProgress').classList.remove('active');
  //Advancement Bar
  document.getElementById('pushUpAdvancement').classList.add('active-btn');
  document.getElementById('gobletSquatAdvancement').classList.remove('active-btn');
  document.getElementById('weightedCrossoverLungesAdvancement').classList.remove('active-btn');
  //Back Buttons
  document.getElementById('gobletSquatBack').style.display = "none";
  document.getElementById('pushupBack').style.display = "block";
  document.getElementById('weightedCrossoverLungesBack').style.display = "none";
  //Forward Buttons
  document.getElementById('pushupContinue').style.display = "block";
  document.getElementById('gobletSquatContinue').style.display = "none";
  document.getElementById('weightedCrossoverLungesContinue').style.display = "none";
}
function weightedCrossoverLunge() {
  //Item Removal/Addition
  document.getElementById('pushupItem').style.display = "none";
  document.getElementById('pullupItem').style.display = "none";
  document.getElementById('weightedCrossoverLungesItem').style.display = "flex"
  //Progress Bar
  document.getElementById('pushUpsProgress').classList.remove('active');
  document.getElementById('pushUpsProgress').classList.add('past');
  document.getElementById('weightedCrossoverLungesProgress').classList.add('active');
  document.getElementById('weightedCrossoverLungesProgress').classList.remove('past');
  document.getElementById('pullUpsProgress').classList.remove('active');
  //Advancement Bar
  document.getElementById('pushUpAdvancement').classList.remove('active-btn');
  document.getElementById('pullupsAdvancement').classList.remove('active-btn');
  document.getElementById('weightedCrossoverLungesAdvancement').classList.add('active-btn');
  //Back Buttons
  document.getElementById('pullupBack').style.display = "none";
  document.getElementById('pushupBack').style.display = "none";
  document.getElementById('weightedCrossoverLungesBack').style.display = "block";
  //Forward Buttons
  document.getElementById('pushupContinue').style.display = "none";
  document.getElementById('pullupContinue').style.display = "none";
  document.getElementById('weightedCrossoverLungesContinue').style.display = "block";
}
function pullups() {
  //Item Removal/Addition
  document.getElementById('gluteBridgesItem').style.display = "none";
  document.getElementById('pullupItem').style.display = "flex";
  document.getElementById('weightedCrossoverLungesItem').style.display = "none"
  //Progress Bar
  document.getElementById('weightedCrossoverLungesProgress').classList.remove('active');
  document.getElementById('weightedCrossoverLungesProgress').classList.add('past');
  document.getElementById('pullUpsProgress').classList.add('active');
  document.getElementById('pullUpsProgress').classList.remove('past');
  document.getElementById('gluteBridgesProgress').classList.remove('active');
  //Advancement Bar
  document.getElementById('gluteBridgesAdvancement').classList.remove('active-btn');
  document.getElementById('pullupsAdvancement').classList.add('active-btn');
  document.getElementById('weightedCrossoverLungesAdvancement').classList.remove('active-btn');
  //Back Buttons
  document.getElementById('pullupBack').style.display = "block";
  document.getElementById('gluteBridgesBack').style.display = "none";
  document.getElementById('weightedCrossoverLungesBack').style.display = "none";
  //Forward Buttons
  document.getElementById('gluteBridgesContinue').style.display = "none";
  document.getElementById('pullupContinue').style.display = "block";
  document.getElementById('weightedCrossoverLungesContinue').style.display = "none";
}
function gluteBridge() {
  //Item Removal/Addition
  document.getElementById('gluteBridgesItem').style.display = "flex";
  document.getElementById('pullupItem').style.display = "none";
  document.getElementById('splitSquatItem').style.display = "none"
  //Progress Bar
  document.getElementById('pullUpsProgress').classList.remove('active');
  document.getElementById('pullUpsProgress').classList.add('past');
  document.getElementById('gluteBridgesProgress').classList.add('active');
  document.getElementById('gluteBridgesProgress').classList.remove('past');
  document.getElementById('splitSquatsProgress').classList.remove('active');
  //Advancement Bar
  document.getElementById('gluteBridgesAdvancement').classList.add('active-btn');
  document.getElementById('pullupsAdvancement').classList.remove('active-btn');
  document.getElementById('splitSquatAdvancement').classList.remove('active-btn');
  //Back Buttons
  document.getElementById('pullupBack').style.display = "none";
  document.getElementById('gluteBridgesBack').style.display = "block";
  document.getElementById('splitSquatBack').style.display = "none";
  //Forward Buttons
  document.getElementById('gluteBridgesContinue').style.display = "block";
  document.getElementById('pullupContinue').style.display = "none";
  document.getElementById('splitSquatContinue').style.display = "none";
}
function splitSquat() {
  //Item Removal/Addition
  document.getElementById('gluteBridgesItem').style.display = "none";
  document.getElementById('plankItem').style.display = "none";
  document.getElementById('splitSquatItem').style.display = "flex"
  //Progress Bar
  document.getElementById('gluteBridgesProgress').classList.remove('active');
  document.getElementById('gluteBridgesProgress').classList.add('past');
  document.getElementById('splitSquatsProgress').classList.add('active');
  document.getElementById('splitSquatsProgress').classList.remove('past');
  document.getElementById('plankProgress').classList.remove('active');
  //Advancement Bar
  document.getElementById('gluteBridgesAdvancement').classList.remove('active-btn');
  document.getElementById('plankAdvancement').classList.remove('active-btn');
  document.getElementById('splitSquatAdvancement').classList.add('active-btn');
  //Back Buttons
  document.getElementById('plankBack').style.display = "none";
  document.getElementById('gluteBridgesBack').style.display = "none";
  document.getElementById('splitSquatBack').style.display = "block";
  //Forward Buttons
  document.getElementById('splitSquatContinue').style.display = "block";
  document.getElementById('gluteBridgesContinue').style.display = "none";
  document.getElementById('finishedWorkoutA').style.display = "none";
  //Stage
  document.getElementById('exercise-stage').style.display = "block";
  document.getElementById('cool-down-stage').style.display = "none";
}
function plank() {
  //Item Removal/Addition
  document.getElementById('plankItem').style.display = "flex";
  document.getElementById('splitSquatItem').style.display = "none"
  //Progress Bar
  document.getElementById('splitSquatsProgress').classList.remove('active');
  document.getElementById('splitSquatsProgress').classList.add('past');
  document.getElementById('plankProgress').classList.add('active');
  document.getElementById('plankProgress').classList.remove('past');
  //Advancement Bar
  document.getElementById('splitSquatAdvancement').classList.remove('active-btn');
  document.getElementById('plankAdvancement').classList.add('active-btn');
  //Back Buttons
  document.getElementById('plankBack').style.display = "block";
  document.getElementById('splitSquatBack').style.display = "none";
  //Forward Buttons
  document.getElementById('splitSquatContinue').style.display = "none";
  document.getElementById('finishedWorkoutA').style.display = "block";
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

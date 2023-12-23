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
    document.getElementById('workout-activity-3').style.display = "flex";
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
    document.getElementById('workout-activity-3').style.display = "none";
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
    //Rounds
    document.getElementById('rd1').style.display = "none";
  }
  function gotoWorkoutActivity5() {
    //Item Removal/Addition
    document.getElementById('workout-activity-5').style.display = "flex";
    document.getElementById('workout-activity-4').style.display = "none";
    document.getElementById('workout-activity-6').style.display = "none";
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
    //Rounds
    document.getElementById('rd1').style.display = "block";
  }
  function gotoWorkoutActivity6() {
    //Item Removal/Addition
    document.getElementById('workout-activity-5').style.display = "none";
    document.getElementById('workout-activity-7').style.display = "none";
    document.getElementById('workout-activity-6').style.display = "flex";
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
    document.getElementById('workout-activity-6').style.display = "none";
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
    document.getElementById('workout-activity-9').style.display = "none";
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
    document.getElementById('workout-activity-8').style.display = "none";/* Number Before */
    document.getElementById('workout-activity-10').style.display = "none";/*Number After */
    document.getElementById('workout-activity-9').style.display = "flex";/* Same Number */
    //Progress Bar
    document.getElementById('progress-item-8').classList.remove('active');/* Number Before */
    document.getElementById('progress-item-8').classList.add('past');/* Number Before */
    document.getElementById('progress-item-9').classList.add('active');/* Same Number */
    document.getElementById('progress-item-9').classList.remove('past');/* Same Number */
    document.getElementById('progress-item-10').classList.remove('active');/*Number After */
    //Advancement Bar
    document.getElementById('advance-bar-8').classList.remove('active-btn');/* Number Before */
    document.getElementById('advance-bar-10').classList.remove('active-btn');/*Number After */
    document.getElementById('advance-bar-9').classList.add('active-btn');/* Same Number */
    //Back Buttons
    document.getElementById('back-btn-9').style.display = "none";/* Same Number */
    document.getElementById('back-btn-7').style.display = "none"; /* Two Numbers Before */
    document.getElementById('back-btn-8').style.display = "block";/* Number Before */
    //Forward Buttons
    document.getElementById('continue-btn-9').style.display = "block";/* Same Number */
    document.getElementById('continue-btn-8').style.display = "none";/* Number Before */
    document.getElementById('continue-btn-10').style.display = "none";/*Number After */
    //Rounds
    document.getElementById('rd1').style.display = "block";
    document.getElementById('rd2').style.display = "none";
  }
  function gotoWorkoutActivity10() {
    //Item Removal/Addition
    document.getElementById('workout-activity-9').style.display = "none";/* Number Before */
    document.getElementById('workout-activity-11').style.display = "none";/*Number After */
    document.getElementById('workout-activity-10').style.display = "flex";/* Same Number */
    //Progress Bar
    document.getElementById('progress-item-9').classList.remove('active');/* Number Before */
    document.getElementById('progress-item-9').classList.add('past');/* Number Before */
    document.getElementById('progress-item-10').classList.add('active');/* Same Number */
    document.getElementById('progress-item-10').classList.remove('past');/* Same Number */
    document.getElementById('progress-item-11').classList.remove('active');/*Number After */
    //Advancement Bar
    document.getElementById('advance-bar-9').classList.remove('active-btn');/* Number Before */
    document.getElementById('advance-bar-11').classList.remove('active-btn');/*Number After */
    document.getElementById('advance-bar-10').classList.add('active-btn');/* Same Number */
    //Back Buttons
    document.getElementById('back-btn-10').style.display = "none";/* Same Number */
    document.getElementById('back-btn-8').style.display = "none"; /* Two Numbers Before */
    document.getElementById('back-btn-9').style.display = "block";/* Number Before */
    //Forward Buttons
    document.getElementById('continue-btn-10').style.display = "block";/* Same Number */
    document.getElementById('continue-btn-9').style.display = "none";/* Number Before */
    document.getElementById('continue-btn-11').style.display = "none";/*Number After */
    //Rounds
    document.getElementById('rd1').style.display = "none";
    document.getElementById('rd2').style.display = "block";
  }
  function gotoWorkoutActivity11() {
    //Item Removal/Addition
    document.getElementById('workout-activity-10').style.display = "none";/* Number Before */
    document.getElementById('workout-activity-12').style.display = "none";/*Number After */
    document.getElementById('workout-activity-11').style.display = "flex";/* Same Number */
    //Progress Bar
    document.getElementById('progress-item-10').classList.remove('active');/* Number Before */
    document.getElementById('progress-item-10').classList.add('past');/* Number Before */
    document.getElementById('progress-item-11').classList.add('active');/* Same Number */
    document.getElementById('progress-item-11').classList.remove('past');/* Same Number */
    document.getElementById('progress-item-12').classList.remove('active');/*Number After */
    //Advancement Bar
    document.getElementById('advance-bar-10').classList.remove('active-btn');/* Number Before */
    document.getElementById('advance-bar-12').classList.remove('active-btn');/*Number After */
    document.getElementById('advance-bar-11').classList.add('active-btn');/* Same Number */
    //Back Buttons
    document.getElementById('back-btn-11').style.display = "none";/* Same Number */
    document.getElementById('back-btn-9').style.display = "none"; /* Two Numbers Before */
    document.getElementById('back-btn-10').style.display = "block";/* Number Before */
    //Forward Buttons
    document.getElementById('continue-btn-11').style.display = "block";/* Same Number */
    document.getElementById('continue-btn-10').style.display = "none";/* Number Before */
    document.getElementById('continue-btn-12').style.display = "none";/*Number After */
  }
  function gotoWorkoutActivity12() {
    //Item Removal/Addition
    document.getElementById('workout-activity-11').style.display = "none";/* Number Before */
    document.getElementById('workout-activity-13').style.display = "none";/*Number After */
    document.getElementById('workout-activity-12').style.display = "flex";/* Same Number */
    //Progress Bar
    document.getElementById('progress-item-11').classList.remove('active');/* Number Before */
    document.getElementById('progress-item-11').classList.add('past');/* Number Before */
    document.getElementById('progress-item-12').classList.add('active');/* Same Number */
    document.getElementById('progress-item-12').classList.remove('past');/* Same Number */
    document.getElementById('progress-item-13').classList.remove('active');/*Number After */
    //Advancement Bar
    document.getElementById('advance-bar-11').classList.remove('active-btn');/* Number Before */
    document.getElementById('advance-bar-13').classList.remove('active-btn');/*Number After */
    document.getElementById('advance-bar-12').classList.add('active-btn');/* Same Number */
    //Back Buttons
    document.getElementById('back-btn-12').style.display = "none";/* Same Number */
    document.getElementById('back-btn-10').style.display = "none"; /* Two Numbers Before */
    document.getElementById('back-btn-11').style.display = "block";/* Number Before */
    //Forward Buttons
    document.getElementById('continue-btn-12').style.display = "block";/* Same Number */
    document.getElementById('continue-btn-11').style.display = "none";/* Number Before */
    document.getElementById('continue-btn-13').style.display = "none";/*Number After */
  }
  function gotoWorkoutActivity13() {
    //Item Removal/Addition
    document.getElementById('workout-activity-12').style.display = "none";/* Number Before */
    document.getElementById('workout-activity-14').style.display = "none";/*Number After */
    document.getElementById('workout-activity-13').style.display = "flex";/* Same Number */
    //Progress Bar
    document.getElementById('progress-item-12').classList.remove('active');/* Number Before */
    document.getElementById('progress-item-12').classList.add('past');/* Number Before */
    document.getElementById('progress-item-13').classList.add('active');/* Same Number */
    document.getElementById('progress-item-13').classList.remove('past');/* Same Number */
    document.getElementById('progress-item-14').classList.remove('active');/*Number After */
    //Advancement Bar
    document.getElementById('advance-bar-12').classList.remove('active-btn');/* Number Before */
    document.getElementById('advance-bar-14').classList.remove('active-btn');/*Number After */
    document.getElementById('advance-bar-13').classList.add('active-btn');/* Same Number */
    //Back Buttons
    document.getElementById('back-btn-13').style.display = "none";/* Same Number */
    document.getElementById('back-btn-11').style.display = "none"; /* Two Numbers Before */
    document.getElementById('back-btn-12').style.display = "block";/* Number Before */
    //Forward Buttons
    document.getElementById('continue-btn-13').style.display = "block";/* Same Number */
    document.getElementById('continue-btn-12').style.display = "none";/* Number Before */
    document.getElementById('continue-btn-14').style.display = "none";/*Number After */
  }
  function gotoWorkoutActivity14() {
    //Item Removal/Addition
    document.getElementById('workout-activity-13').style.display = "none";/* Number Before */
    document.getElementById('workout-activity-15').style.display = "none";/*Number After */
    document.getElementById('workout-activity-14').style.display = "flex";/* Same Number */
    //Progress Bar
    document.getElementById('progress-item-13').classList.remove('active');/* Number Before */
    document.getElementById('progress-item-13').classList.add('past');/* Number Before */
    document.getElementById('progress-item-14').classList.add('active');/* Same Number */
    document.getElementById('progress-item-14').classList.remove('past');/* Same Number */
    document.getElementById('progress-item-15').classList.remove('active');/*Number After */
    //Advancement Bar
    document.getElementById('advance-bar-13').classList.remove('active-btn');/* Number Before */
    document.getElementById('advance-bar-15').classList.remove('active-btn');/*Number After */
    document.getElementById('advance-bar-14').classList.add('active-btn');/* Same Number */
    //Back Buttons
    document.getElementById('back-btn-14').style.display = "none";/* Same Number */
    document.getElementById('back-btn-12').style.display = "none"; /* Two Numbers Before */
    document.getElementById('back-btn-13').style.display = "block";/* Number Before */
    //Forward Buttons
    document.getElementById('continue-btn-14').style.display = "block";/* Same Number */
    document.getElementById('continue-btn-13').style.display = "none";/* Number Before */
    document.getElementById('continue-btn-15').style.display = "none";/*Number After */
    //Rounds
    document.getElementById('rd3').style.display = "none";
    document.getElementById('rd2').style.display = "block";
  }
  function gotoWorkoutActivity15() {
    //Item Removal/Addition
    document.getElementById('workout-activity-14').style.display = "none";/* Number Before */
    document.getElementById('workout-activity-16').style.display = "none";/*Number After */
    document.getElementById('workout-activity-15').style.display = "flex";/* Same Number */
    //Progress Bar
    document.getElementById('progress-item-14').classList.remove('active');/* Number Before */
    document.getElementById('progress-item-14').classList.add('past');/* Number Before */
    document.getElementById('progress-item-15').classList.add('active');/* Same Number */
    document.getElementById('progress-item-15').classList.remove('past');/* Same Number */
    document.getElementById('progress-item-16').classList.remove('active');/*Number After */
    //Advancement Bar
    document.getElementById('advance-bar-14').classList.remove('active-btn');/* Number Before */
    document.getElementById('advance-bar-16').classList.remove('active-btn');/*Number After */
    document.getElementById('advance-bar-15').classList.add('active-btn');/* Same Number */
    //Back Buttons
    document.getElementById('back-btn-15').style.display = "none";/* Same Number */
    document.getElementById('back-btn-13').style.display = "none"; /* Two Numbers Before */
    document.getElementById('back-btn-14').style.display = "block";/* Number Before */
    //Forward Buttons
    document.getElementById('continue-btn-15').style.display = "block";/* Same Number */
    document.getElementById('continue-btn-14').style.display = "none";/* Number Before */
    document.getElementById('continue-btn-16').style.display = "none";/*Number After */
    //Rounds
    document.getElementById('rd2').style.display = "none";
    document.getElementById('rd3').style.display = "block";
  }
  function gotoWorkoutActivity16() {
    //Item Removal/Addition
    document.getElementById('workout-activity-15').style.display = "none";/* Number Before */
    document.getElementById('workout-activity-17').style.display = "none";/*Number After */
    document.getElementById('workout-activity-16').style.display = "flex";/* Same Number */
    //Progress Bar
    document.getElementById('progress-item-15').classList.remove('active');/* Number Before */
    document.getElementById('progress-item-15').classList.add('past');/* Number Before */
    document.getElementById('progress-item-16').classList.add('active');/* Same Number */
    document.getElementById('progress-item-16').classList.remove('past');/* Same Number */
    document.getElementById('progress-item-17').classList.remove('active');/*Number After */
    //Advancement Bar
    document.getElementById('advance-bar-15').classList.remove('active-btn');/* Number Before */
    document.getElementById('advance-bar-17').classList.remove('active-btn');/*Number After */
    document.getElementById('advance-bar-16').classList.add('active-btn');/* Same Number */
    //Back Buttons
    document.getElementById('back-btn-16').style.display = "none";/* Same Number */
    document.getElementById('back-btn-14').style.display = "none"; /* Two Numbers Before */
    document.getElementById('back-btn-15').style.display = "block";/* Number Before */
    //Forward Buttons
    document.getElementById('continue-btn-16').style.display = "block";/* Same Number */
    document.getElementById('continue-btn-15').style.display = "none";/* Number Before */
    document.getElementById('continue-btn-17').style.display = "none";/*Number After */
  }
  function gotoWorkoutActivity17() {
    //Item Removal/Addition
    document.getElementById('workout-activity-16').style.display = "none";/* Number Before */
    document.getElementById('workout-activity-18').style.display = "none";/*Number After */
    document.getElementById('workout-activity-17').style.display = "flex";/* Same Number */
    //Progress Bar
    document.getElementById('progress-item-16').classList.remove('active');/* Number Before */
    document.getElementById('progress-item-16').classList.add('past');/* Number Before */
    document.getElementById('progress-item-17').classList.add('active');/* Same Number */
    document.getElementById('progress-item-17').classList.remove('past');/* Same Number */
    document.getElementById('progress-item-18').classList.remove('active');/*Number After */
    //Advancement Bar
    document.getElementById('advance-bar-16').classList.remove('active-btn');/* Number Before */
    document.getElementById('advance-bar-18').classList.remove('active-btn');/*Number After */
    document.getElementById('advance-bar-17').classList.add('active-btn');/* Same Number */
    //Back Buttons
    document.getElementById('back-btn-17').style.display = "none";/* Same Number */
    document.getElementById('back-btn-15').style.display = "none"; /* Two Numbers Before */
    document.getElementById('back-btn-16').style.display = "block";/* Number Before */
    //Forward Buttons
    document.getElementById('continue-btn-17').style.display = "block";/* Same Number */
    document.getElementById('continue-btn-16').style.display = "none";/* Number Before */
    document.getElementById('continue-btn-18').style.display = "none";/*Number After */
  }
  function gotoWorkoutActivity18() {
    //Item Removal/Addition
    document.getElementById('workout-activity-17').style.display = "none";/* Number Before */
    document.getElementById('workout-activity-19').style.display = "none";/*Number After */
    document.getElementById('workout-activity-18').style.display = "flex";/* Same Number */
    //Progress Bar
    document.getElementById('progress-item-17').classList.remove('active');/* Number Before */
    document.getElementById('progress-item-17').classList.add('past');/* Number Before */
    document.getElementById('progress-item-18').classList.add('active');/* Same Number */
    document.getElementById('progress-item-18').classList.remove('past');/* Same Number */
    document.getElementById('progress-item-19').classList.remove('active');/*Number After */
    //Advancement Bar
    document.getElementById('advance-bar-17').classList.remove('active-btn');/* Number Before */
    document.getElementById('advance-bar-19').classList.remove('active-btn');/*Number After */
    document.getElementById('advance-bar-18').classList.add('active-btn');/* Same Number */
    //Back Buttons
    document.getElementById('back-btn-18').style.display = "none";/* Same Number */
    document.getElementById('back-btn-16').style.display = "none"; /* Two Numbers Before */
    document.getElementById('back-btn-17').style.display = "block";/* Number Before */
    //Forward Buttons
    document.getElementById('continue-btn-18').style.display = "block";/* Same Number */
    document.getElementById('continue-btn-17').style.display = "none";/* Number Before */
    document.getElementById('finishedWorkout').style.display = "none";/*Number After */
  }
  function gotoWorkoutActivity19() {
    //Item Removal/Addition
    document.getElementById('workout-activity-18').style.display = "none";/* Number Before */
    document.getElementById('workout-activity-19').style.display = "flex";/* Same Number */
    //Progress Bar
    document.getElementById('progress-item-18').classList.remove('active');/* Number Before */
    document.getElementById('progress-item-18').classList.add('past');/* Number Before */
    document.getElementById('progress-item-19').classList.add('active');/* Same Number */
    document.getElementById('progress-item-19').classList.remove('past');/* Same Number */
    //Advancement Bar
    document.getElementById('advance-bar-18').classList.remove('active-btn');/* Number Before */
    document.getElementById('advance-bar-19').classList.add('active-btn');/* Same Number */
    //Back Buttons
    document.getElementById('back-btn-17').style.display = "none"; /* Two Numbers Before */
    document.getElementById('back-btn-18').style.display = "block";/* Number Before */
    //Forward Buttons
    document.getElementById('finishedWorkout').style.display = "block";/* Same Number */
    document.getElementById('continue-btn-18').style.display = "none";/* Number Before */
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
    document.getElementById('progress-item-11').classList.remove('past');
    document.getElementById('progress-item-11').classList.add('finished');
    document.getElementById('progress-item-12').classList.remove('past');
    document.getElementById('progress-item-12').classList.add('finished');
    document.getElementById('progress-item-13').classList.remove('past');
    document.getElementById('progress-item-13').classList.add('finished');
    document.getElementById('progress-item-14').classList.remove('past');
    document.getElementById('progress-item-14').classList.add('finished');
    document.getElementById('progress-item-15').classList.remove('past');
    document.getElementById('progress-item-15').classList.add('finished');
    document.getElementById('progress-item-16').classList.remove('past');
    document.getElementById('progress-item-16').classList.add('finished');
    document.getElementById('progress-item-17').classList.remove('past');
    document.getElementById('progress-item-17').classList.add('finished');
    document.getElementById('progress-item-18').classList.remove('past');
    document.getElementById('progress-item-18').classList.add('finished');
    document.getElementById('progress-item-19').classList.remove('active');
    document.getElementById('progress-item-19').classList.add('finished');
    //Check Icon
    document.getElementById('finishedWorkout').style.color = "rgba(88, 255, 96, 0.8)";
    //Back Icon
    document.getElementById('back-btn-18').style.display = "none";
    //Stopwatch
    clearInterval(stopwatch);
  }
  //Workout Stopwatch
  let stopwatch;
  let seconds = 0;
  let minutes = 0;

  function updateStopwatch() {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    const stopwatchElement = document.getElementById('stopwatch');
    stopwatchElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  function startStopwatch() {
    stopwatch = setInterval(updateStopwatch, 1000);
  }

  function stopStopwatch() {
    clearInterval(stopwatch);
  }
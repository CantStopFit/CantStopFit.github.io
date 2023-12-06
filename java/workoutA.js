function situp() {
    //Item Removal/Addition
    document.getElementById('SitUpItem').style.display = "flex";
    document.getElementById('jumpRopeItem').style.display = "none";
    document.getElementById('bandedSideWalkItem').style.display = "none"
    //Progress Bar
    document.getElementById('jumpRopeProgress').classList.remove('active');
    document.getElementById('jumpRopeProgress').classList.add('past');
    document.getElementById('situpProgress').classList.add('active');
    //Advancement Bar
    document.getElementById('situpAdvancement').classList.add('active-btn');
    document.getElementById('jumpRopeAdvancement').classList.remove('active-btn')
    //Back Buttons
    document.getElementById('situpBack').style.display = "block";
    document.getElementById('fakeBack').style.display = "none"
    //Forward Buttons
    document.getElementById('jumpRopeContinue').style.display = "none";
    document.getElementById('situpContinue').style.display = "block";
}
// function test(){
      //   document.getElementById('jumpRopeProgress').classList.add('past');
      // }
      // function test2(){
      //   document.getElementById('jumpRopeProgress').classList.remove('past');
      //   document.getElementById('jumpRopeProgress').classList.add('active');
      // }
      //Jump Rope Timer
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

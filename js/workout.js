//Workout Choice
const selection = document.getElementById('workout-choice');
const workoutTemplate = document.getElementById('workout-template')
const workoutA = document.getElementById('workout-a');
const workoutB = document.getElementById('workout-b');
const workoutC = document.getElementById('workout-c');

selection.addEventListener('change', function handleChange(event) {
  if (event.target.value === 'choose') {
    workoutTemplate.style.display = 'flex';
  } else {
    workoutTemplate.display = 'none';
  }
  if (event.target.value === 'workout-a') {
    workoutA.style.display = 'flex';
    workoutTemplate.style.display = 'none';
  } else {
    workoutA.style.display = 'none';
    workoutTemplate.display = 'flex';
  }
  if (event.target.value === 'workout-b') {
    workoutB.style.display = 'flex';
  } else {
    workoutB.style.display = 'none';
  }
  if (event.target.value === 'workout-c') {
    workoutC.style.display = 'flex';
  } else {
    workoutC.style.display = 'none';
  }
});

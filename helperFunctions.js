// Toggle play/pause
function togglePlayPause() {
  
  if (isPlaying) {
    cancelAnimationFrame(animationID);
    isPlaying = false;
  } else {
    isPlaying = true;
    animationID = requestAnimationFrame(render);
  }
}

// Function to refresh the pattern with a new random seed
function refreshPattern() {
  timeOffset = performance.now();
  randomSeed = Math.floor(Math.random() * 1000,0);
  gl.uniform1f(seedLocation, randomSeed);
  if(!isPlaying){
    isPlaying = true;
    animationID = requestAnimationFrame(render);
  }
}

// Handle keyboard events
window.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
      event.preventDefault();
      togglePlayPause();
  }

  if (event.code === 'Tab') {
    event.preventDefault();
    refreshPattern();
  }

  if (event.code === 'KeyR') {
    randomizeInputs();
  }

  if (event.code === 'KeyS') {
    saveImage();
  }

  if (event.code === 'KeyV') {
    toggleVideoRecord();
  }

  if (event.code === 'KeyT') {
    startFromZeroTime();
  }

  if (event.code === 'KeyM') {
    toggleMusic();
  }

  if (event.code === 'KeyZ') {
    toggleZenMode();
  }
});

function startFromZeroTime(){
  console.log("Restarting animation from time = 0");
  
  // Cancel current animation if running
  if (animationID) {
    cancelAnimationFrame(animationID);
  }
  
  // Set the time offset to the current time
  // This will be subtracted in the render function
  timeOffset = performance.now();
  
  // Reset frame counter for FPS calculation
  frameCount = 0;
  lastTime = performance.now();
  
  // Make sure all other uniforms are updated
  updateUniforms();
  
  // Ensure animation is playing
  isPlaying = true;
  
  // Start the animation loop from the beginning
  animationID = requestAnimationFrame(render);
}

// Function to randomize all GUI parameters
function randomizeInputs() {
  timeOffset = performance.now();
  console.log("randomize inputs");
  params.timeScale = 0.1 + Math.random() * 0.8;
  
  // Randomize pattern controls
  params.patternAmp = 3.0 + Math.random() * 17.0;
  params.patternFreq = 0.2 + Math.random() * 4.8;
  
  // Randomize visual effects
  params.bloomStrength = Math.random() * 3.0;
  params.saturation = Math.random() * 2.0;
  params.grainAmount = Math.random() * 0.5;
  params.minCircleSize = Math.random() * 5.0;
  params.circleStrength = Math.random() * 3.0;
  params.distortX = Math.random() * 50.0;
  params.distortY = Math.random() * 50.0;
  
  // Randomize color tint
  params.colorTintR = Math.random() * 1.5;
  params.colorTintG = Math.random() * 1.5;
  params.colorTintB = Math.random() * 1.5;
  
  // Update the GUI controllers to reflect the new values
  for (let i in gui.__controllers) {
    gui.__controllers[i].updateDisplay();
  }
  
  // Update the folder controllers if any
  for (let f in gui.__folders) {
    const folder = gui.__folders[f];
    for (let i in folder.__controllers) {
      folder.__controllers[i].updateDisplay();
    }
  }
  
  updateUniforms();
  refreshPattern();
}

// Add this function to handle canvas resizing
function updateCanvasSize() {
  // Update canvas dimensions
  canvas.width = params.canvasWidth;
  canvas.height = params.canvasHeight;
  
  // Update the WebGL viewport to match
  gl.viewport(0, 0, canvas.width, canvas.height);
  
  // Re-render if not already playing
  if (!isPlaying) {
      drawScene();
  }
  
  // If recording is active, we need to handle that
  if (recordVideoState) {
      stopRecording();
      startRecording();
  }
}

window.addEventListener('resize', function() {
  gl.viewport(0, 0, canvas.width, canvas.height);
});

document.getElementById('randomizeBtn').addEventListener('click', () => randomizeInputs());
document.getElementById('playPauseBtn').addEventListener('click', () => togglePlayPause());
document.getElementById('exportVideoBtn').addEventListener('click', () => toggleVideoRecord());
document.getElementById('saveBtn').addEventListener('click', () => saveImage());
document.getElementById('toggleMusicBtn').addEventListener('click', () => toggleMusic());
document.getElementById('zen-mode-button').addEventListener('click', () => toggleZenMode());

//intro overlay info screen

let musicPlaying = true;
const backgroundMusic = new Audio('assets/fahrenheitFairEnough.mp3');

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('intro-overlay');
  const startButton = document.getElementById('start-button');
  
  startButton.addEventListener('click', () => {

    // Play background music
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.7;        
    const playPromise = backgroundMusic.play();

    overlay.style.display = 'none';
  });
});

function toggleMusic(){
  if(musicPlaying){
    backgroundMusic.pause();
    musicPlaying = false;
  } else {
    const playPromise = backgroundMusic.play();
    musicPlaying = true;
  }
}

let isZenMode = false;

function hideInfo(){
  document.querySelector("#button-table").classList.add("hidden");
  document.querySelector("#info-container").classList.add("hidden");
  document.querySelector(".close-button").style.opacity = 0;
}

function showInfo(){
  document.querySelector("#button-table").classList.remove("hidden");
  document.querySelector("#info-container").classList.remove("hidden");
  document.querySelector(".close-button").style.opacity = 0.6;
}

function toggleZenMode(){
  if(isZenMode){
    showInfo();
  } else {
    hideInfo();
  }
  isZenMode = !isZenMode;
}
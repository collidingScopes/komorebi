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

  if (event.code === 'Enter') {
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
});

// Function to randomize all GUI parameters
function randomizeInputs() {
  console.log("randomize inputs");
  params.timeScale = 0.1 + Math.random() * 0.9;
  
  // Randomize pattern controls
  params.patternAmp = 1.0 + Math.random() * 15.0;
  params.patternFreq = 0.2 + Math.random() * 4.8;
  
  // Randomize visual effects
  params.bloomStrength = Math.random() * 4.0;
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

//document.getElementById('randomizeBtn').addEventListener('click', () => randomizeInputs());
//document.getElementById('exportVideoBtn').addEventListener('click', () => toggleVideoRecord());
//document.getElementById('saveBtn').addEventListener('click', () => saveImage());
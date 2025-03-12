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
  document.querySelector("#seedIndicator").textContent = "Seed: "+randomSeed;
  isPlaying = true;
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
  // Randomize timeScale (speed) between 0.2 and 1.5
  params.timeScale = 0.2 + Math.random() * 1.3;
  
  // Randomize pattern controls
  params.patternAmp = 1.0 + Math.random() * 9.0;
  params.patternFreq = 0.2 + Math.random() * 1.8;
  
  // Randomize visual effects
  params.bloomStrength = 1.0 + Math.random() * 4.0;
  params.saturation = 0.05 + Math.random() * 0.95;
  params.grainAmount = Math.random() * 0.8;
  params.minCircleSize = 1.0 + Math.random() * 9.0;
  params.circleStrength = 0.2 + Math.random() * 2.8;
  params.distortX = Math.random() * 50.0;
  params.distortY = Math.random() * 50.0;

  params.verticalFlowFactor = Math.random() * 2.0;
  
  // Randomize color tint
  params.colorTintR = 0.5 + Math.random() * 1.0;
  params.colorTintG = 0.5 + Math.random() * 1.0;
  params.colorTintB = 0.5 + Math.random() * 1.0;
  
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
  
  // Update the uniforms in the shader
  updateUniforms();
  
  // Generate a new pattern
  refreshPattern();
}

//document.getElementById('randomizeBtn').addEventListener('click', () => randomizeInputs());
//document.getElementById('exportVideoBtn').addEventListener('click', () => toggleVideoRecord());
//document.getElementById('saveBtn').addEventListener('click', () => saveImage());
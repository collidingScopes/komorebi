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
    //randomizeInputs();
  }

  if (event.code === 'KeyS') {
    saveImage();
  }

  if (event.code === 'KeyV') {
    toggleVideoRecord();
  }
});

//document.getElementById('randomizeBtn').addEventListener('click', () => randomizeInputs());
//document.getElementById('exportVideoBtn').addEventListener('click', () => toggleVideoRecord());
//document.getElementById('saveBtn').addEventListener('click', () => saveImage());
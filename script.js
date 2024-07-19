//For clicking button//
document.getElementById('English').addEventListener('click', function() {
    displayCaption('Whoever moves the mouse is gay!');
  });
  
  document.getElementById('Spanish').addEventListener('click', function() {
    displayCaption('El que mueve mouse primero es gay!');
  });
  
  function displayCaption(text) {
    document.getElementById('caption').innerText = text;
  }

//For audio sound after clicking button//
  document.getElementById('English').addEventListener('click', function() {
    playAudio();
  });
  
  document.getElementById('Spanish').addEventListener('click', function() {
    playAudio();
  });
  
  function playAudio() {
    let audio = document.getElementById('audio');
    audio.loop = true;
    audio.play();
  }
//To make GIF appear//
  function showGif() {
    let gif = document.getElementById('rockGif');
    gif.style.display = 'block';
}

// Event listeners for the buttons
document.getElementById('English').addEventListener('click', showGif);
document.getElementById('Spanish').addEventListener('click', showGif);
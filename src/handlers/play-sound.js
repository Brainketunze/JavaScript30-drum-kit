
// A function that play audio each time key is pressed
// @param (event) interact each time is call from the listener
// constant (audio) that select each audio according data key 
// constant (key) that select all keys from the div container 
// Handler 'playing' that interact with each key 

export function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

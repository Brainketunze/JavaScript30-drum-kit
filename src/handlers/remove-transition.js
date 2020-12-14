
// 'removeTransition' that remove the handler 'playing' when the transition is finish
// @param (event) interact each time is call from the listener
// condition that is going to return all the properties different than transform 



export function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}
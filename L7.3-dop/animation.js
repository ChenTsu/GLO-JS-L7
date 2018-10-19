'use strict';

let field   = document.getElementById('field'),
    element = document.getElementById('element'),
    start   = document.getElementById('start'),
    stop    = document.getElementById('stop');

let shift   = 0,
    step    = 1,
    animationID;

start.addEventListener('click', (evt)=>{
  elementStep();
});

stop.addEventListener('click', (evt)=>{
  cancelAnimationFrame(animationID);
});

function elementStep() {
  if (shift>field.clientWidth - element.clientWidth - 1){
    step = -1;
  }
  if (shift<1){
    step = 1;
  }
  
  shift += step;
  element.style.left = shift + 'px';
  animationID = requestAnimationFrame(elementStep);
}

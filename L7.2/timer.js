'use strict';

document.addEventListener('DOMContentLoaded', ()=>{
  let timerBox = document.body.getElementsByClassName('timerBox')[0];
  let timer = new Date();
  
  
  
  let timerId  = setInterval(()=>{
    timer.setMilliseconds( timer.getMilliseconds() + 1000 );
  
    timerBox.textContent = timer.getHours() + ':' + timer.getMinutes() + ':' + timer.getSeconds();
  }, 1000);
  
  console.log(timerId);
});
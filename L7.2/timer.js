'use strict';

document.addEventListener('DOMContentLoaded', ()=>{
  let timerBox = document.body.getElementsByClassName('timerBox')[0];
  let timer = new Date();
  
  
  
  let timerId  = setInterval(()=>{
    timer.setMilliseconds( timer.getMilliseconds() + 1000 );
    let tmp = [timer.getHours().toString(), timer.getMinutes().toString(), timer.getSeconds().toString()];
  
    for (let i=0; i<3; i++){
      if (tmp[i].length === 1){
        tmp[i] = '0' + tmp[i];
      }
    }
    timerBox.textContent = tmp.join(':');
  }, 1000);
  
  console.log(timerId);
});
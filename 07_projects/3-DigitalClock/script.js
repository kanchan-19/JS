const button = document.querySelector('#clock');

setInterval(function(){
  let date = new Date();
  let time = date.toLocaleTimeString();
  button.innerHTML = time;
}, 1000); // 1000 is for 1 ms
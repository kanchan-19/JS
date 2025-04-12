// generate random color

const randomColor = function(){
  const hex = "0123456789ABCDEF";
  let color = "#";
  for(let i=0; i<6; i++){
    color+=hex[Math.floor(Math.random()*16)];
  }
  return color;
}
console.log(randomColor());

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const main = document.querySelector('main');
let intervalId;

start.addEventListener('click', function(){
  const startChangingColor = function(){
    main.style.backgroundColor = randomColor();
  }

  if(!intervalId){
    intervalId = setInterval(startChangingColor, 1000);
  }

  /* If we don't check if intervalId is null or it already exists, then if we repeatedly click start and then we click stop, then stop doesn't work at that time. This behavior occurs because multiple setInterval functions are being created when we click the "start" button repeatedly, and the stop button only clears the last intervalId. The previous intervals are still active and continue to execute.
  The problem lies in how the "start" button logic is implemented. You're allowing new intervals to be set up every time "start" is clicked, instead of ensuring there's only one active interval running at any given time.*/

});

stop.addEventListener('click', function(){
  clearInterval(intervalId);
  intervalId = null; // Here, we are derefrencing the value so that memory can become free if that variable is not getting used.
});
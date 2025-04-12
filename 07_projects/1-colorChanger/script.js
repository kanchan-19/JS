const body = document.querySelector('body');

const boxes = document.querySelectorAll(".color-box");
console.log(boxes);

boxes.forEach(function(box){
  console.log(box);
  box.addEventListener('click', function(event){ // Here, event is an object
    console.log(event);
    console.log(event.target); // it gives us from where event is coming
    if(event.target.id === 'box1'){
      body.style.backgroundColor = "grey";
    }
    if(event.target.id === 'box2'){
      body.style.backgroundColor = 'white';
    }
    if(event.target.id === 'box3'){
      body.style.backgroundColor = 'blue';
    }
    if(event.target.id === 'box4'){
      body.style.backgroundColor = 'yellow';
    }
  })
}) 
// default action of form is to send the values to url either by post or get method

const form = document.querySelector('form');
// cont height = parseInt(document.querySelector('#height')); => this usecase will give us empty value as its taking value at start only

form.addEventListener('submit', function(event){
  event.preventDefault();

  const weight = parseInt(document.querySelector('#weight').value);
  const height = parseInt(document.querySelector('#height').value);
  const result = document.querySelector('#result');

  if(height < 0 || isNaN(height) || height === ''){
    result.innerHTML = `Please give a valid height ${height}`;
  }else if(weight < 0 || isNaN(weight) || weight === ''){
    result.innerHTML = `Please enter a valid weight ${weight}`;
  }else{
    const bmi = (weight / ((height*height) / 10000)).toFixed(2);
    if(bmi < 18.6){
      result.innerHTML = `<span>${bmi} <br> You are underweight</span>`;
    }else if(bmi >= 18.6 && bmi <= 24.9){
      result.innerHTML = `<span>${bmi} <br> Your weight is normal</span>`;
    }else{
      result.innerHTML = `<span>${bmi} <br> You are overweight.</span>`;
    }
  }
})
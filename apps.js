const colors =  ['red','green','blue','yellow','magenta','cyan','orange','violet','white','black'];
const hexs = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const colorBtn = document.getElementById('btn-color');
const color = document.querySelector('.color')

const hexBtn = document.getElementById('btn-hex');
const hex = document.querySelector('.hex');

colorBtn.addEventListener('click', function(){
  let randomColor = colors[randomColors()];
  color.textContent = randomColor;
  document.querySelector('.primary-container').style.backgroundColor = randomColor;
});

function randomColors(){
  return Math.floor(Math.random() * colors.length);
}

hexBtn.addEventListener('click', function(){
  let hexColor = '#';
  for(let i = 0; i < 6; i++){
    hexColor += hexs[randomHex()];
  }
  hex.textContent = hexColor;
  document.querySelector('.hex-container').style.backgroundColor = hexColor;
})

function randomHex(){
  return Math.floor(Math.random() * hexs.length);
}
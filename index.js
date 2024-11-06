const display = document.querySelector('.display');
const button = document.querySelector('body')

button.addEventListener('keydown', e => {
  if (!isNaN(e.key) || e.key==='+' || e.key === '-' || e.key === '*' || e.key === '/' || e.key ==='.')
    appendToDisplay(e.key);
  else if(e.key==='Enter')
    calculate();
  else if(e.key==='Backspace')
    display.value = display.value.slice(0,-1);
})


function appendToDisplay(a){
  display.value += a
}

function calculate(){
  const result = eval(display.value);
  display.value = result;
}

function clearDisplay(){
  display.value = '';
}



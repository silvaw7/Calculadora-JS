let calculation = '';
let decimalAdded = false;

function addElement(element){
  // condição para que a conta não comece com '.' ou operadores;
  if(calculation == '' && isOperator(element)) {
    // nada acontece;
  }else if(calculation == '0' && element == '0'){ // impede que "0" seja inserido repetidamente como primeiro digito;
    // nada acontece;
  }
  else if(isOperator(calculation.slice(-1)) && isOperator(element)){
    // nada acontece;
  } else if(element == '.' && !decimalAdded){
    calculation += element;
    decimalAdded = true;
  } else if(decimalAdded && element == '.' ){
    //
  } else if(decimalAdded && isOperator(element)){
    decimalAdded = false;
  }
   else {
    calculation += element;
  }

  displayElement();
}


function total() {
  document.querySelector('.resultado-anterior').textContent = calculation + ' = ';
  calculation = eval(calculation);
  displayElement();
  decimalAdded = false;
  calculation = calculation.toString();
}

function displayElement(){
  document.querySelector('.resultado-atual').textContent = calculation;
}

function clearResult(){
  document.querySelector('.resultado-atual').textContent = ' ';
  document.querySelector('.resultado-anterior').textContent = ' ';
  calculation = '';
}

function deleteLastChar() {
  calculation = calculation.substring(0, calculation.length -1);
  displayElement();
}

function isOperator(element){
  if (element == '+' || element == '-' || element == '*' || element == '/' || element == '.'){
    return true;
  } else {
    return false;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const deleteButton = document.querySelector('.js-delete-button');
  const clearButton = document.querySelector('.js-clear-button');
  const resultButton = document.querySelector('.js-result-button');
  const elementsButton = document.querySelectorAll('.js-math-element');

  deleteButton.addEventListener('click', ()=> {
     deleteLastChar();
  });
  clearButton.addEventListener('click', ()=> {
    clearResult();
  });
  resultButton.addEventListener('click', ()=> {
    total();
  })
  elementsButton.forEach((element) => element.addEventListener('click', () => addElement(element.innerHTML)));

})


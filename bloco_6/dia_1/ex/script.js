function createStateOptions() {
    let states = document.getElementById('state');
    let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR']

    for (let index = 0; index < stateOptions.length; index += 1) {
        let createOptions = document.createElement('option');
        states.appendChild(createOptions).innerText = stateOptions[index];
        states.appendChild(createOptions).value = stateOptions[index];
    }
}

function defaultValidation(input, name){
    let trimmed = input.value.trim(); //O trim retorna o texto sem espaços em branco.
    let validation = inputs[name];

    if(validation.required && trimmed.length === 0){
        return false;
      }
    
      if(validation.maxLength && trimmed.length > validation.maxLength){
        return false;
      }
      
    
      return true;
    }
    
    function dateValidation(input, name){
      if(input.value.length === 0){
        return {
          message: 'A data não foi preenchida!'
        }
      }
    
      let regex = /^\d\d\/\d\d\/\d\d\d\d$/;
      
      if(!regex.test(input.value)){
        return {
          message: 'Data: Formato inválido'
        };
      }
    
      let splitted = input.value.split('/');
      let day = splitted[0];
      let month = splitted[1];
      let year = splitted[2];
    
      if(day < 0 || day > 30){
        return {
          message: 'Dia inválido'
        };
      }
    
      if(month < 0 || month > 12){
        return {
          message: 'Mês inválido'
        }
      }
    
      if(year < 0) {
        return {
          message: 'Ano inválido'
        };
      }
    
      return true;
}



window.onload = function () {
    createStateOptions();
    
    let button = document.querySelector('.submit-button');
    button.addEventListener('click', handleSubmit);
}
//Ex1

const testingScope = escopo => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true);

  //Ex2

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
oddsAndEvens.sort(function(a,b) {return a-b})

console.log(oddsAndEvens);

//Parte2
//Ex1
const Fatorial = number => {
  let resultado = 1;
  for (let index = 2; index <= number; index++){
    resultado *= index;
  }
  return resultado;
}
console.log(Fatorial(5));


const factorial = number => number > 1 ? number * factorial(number-1) : 1
console.log(factorial(5));

//Ex2

const contaPalavras = (frase) => frase.split('').length;
console.log(contaPalavras('Fala cara'));
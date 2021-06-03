//ex1
const pai = document.getElementById('pai');
const brotherElementWhereAreYou = document.createElement('div');
brotherElementWhereAreYou.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);

//ex2
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const sonElementWhereAreYou = document.createElement('div');
sonElementWhereAreYou.id = 'filhoElementoOndeVoceEsta';
sonElementWhereAreYou.appendChild(filhoElementoOndeVoceEsta);

//ex3
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const filhoPrimeiroFilhoDoFilho = document.createElement('div');
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilho';
filhoPrimeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

//ex4
const terceiroFilho = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextSibling;
console.log(terceiroFilho);

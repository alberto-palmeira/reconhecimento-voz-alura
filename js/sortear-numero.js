function geraNumeroAleatorio () {
    return parseInt(Math.random() * (menorValor - maiorValor - 1 ) + maiorValor + 1);
};

const menorValor = 10;
const maiorValor = 1000;

const numeroSecreto = geraNumeroAleatorio();
console.log("🚀 ~ file: sortear-numero.js:6 ~ numeroSecreto", numeroSecreto);

const elementoMenorValor = document.querySelector('#menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.querySelector('#maior-valor');
elementoMaiorValor.innerHTML = maiorValor;

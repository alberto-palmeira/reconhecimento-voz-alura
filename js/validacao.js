function verificaValorValido (chute) {
    const numero = +chute;

    console.log("🚀 ~ file: validacao.js:3 ~ numero", typeof(numero), numero);
    
    if (!Number(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido</div>`;
        return false;
    };

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido. O número secreto está entre ${menorValor} e ${maiorValor}`;
        return false;
    };
    
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}!</h3>
        
        <button id="jogar__novamente" class="botao__jogar">Jogar novamente</button>
        <button id="parar__reconhecimento" class="botao__jogar">Parar reconhecimento de voz</button>
        `;       
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`;
        return false;
    } else {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`;
        return false;
    }
}

function chuteForInvalido (numero) {
    return numero > maiorValor || numero < menorValor;
};

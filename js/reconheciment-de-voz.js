// ---------- Funções ----------
function exibeChuteNaTela (chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}<span>
    `
}

// ---------- Lógica ----------

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

let elementoChute = document.querySelector('#chute');
let elementoMensagem = document.querySelector('#mensagem__acerto');

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';

recognition.onresult = (evento) => {
    let chute = evento.results[0][0].transcript;
    
    exibeChuteNaTela(chute);
    verificaValorValido(chute);
};

recognition.onend = () => {
    recognition.start();
}

recognition.start();

document.body.addEventListener('click', e => {
    if (e.target.id === 'jogar__novamente') {
        window.location.reload();
    };

    if (e.target.id == 'parar__reconhecimento') {
        recognition.onend = () => {
            recognition.stop();
        };
    }
});

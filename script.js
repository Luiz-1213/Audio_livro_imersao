const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar =document.getElementById('anterior');
const nomeCapitulo = document.getElementById('capitulo')

const numeroCapitulos = 10;
let playOn = 0;
let capituloAtual = 1;

// Função
function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill');
}

function trocarNomeFaixa(){
    nomeCapitulo.innerText = `Capítulo ${capituloAtual}`
}

function proximaFaixa(){
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    } else{
        capituloAtual = capituloAtual + 1;
    }
    console.log(capituloAtual)
    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`
    tocarFaixa();
    playOn = 1;
    trocarNomeFaixa();
    
}

function faixaAnterior(){
    if(capituloAtual === 1){
        capituloAtual =10;
    } else{
        capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`
    tocarFaixa();
    playOn = 1;
    trocarNomeFaixa();
}


// Eventos
botaoPlayPause.addEventListener("click", ()=>{
    if(playOn === 0){
        tocarFaixa();
        playOn = 1;
    } else{
        pausarFaixa();
        playOn = 0;
    }
} )

botaoAvancar.addEventListener("click", proximaFaixa)
botaoVoltar.addEventListener("click", faixaAnterior)

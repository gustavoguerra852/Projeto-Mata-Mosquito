
var largura = 0
var altura = 0
var vidas = 3
var tempo = 0
var tempoMosquito = 0

//Recebendo Nível
var nivel = window.location.search
nivel = nivel.replace('?', '')
console.log(nivel)

if(nivel == 'normal') {
    tempo = 30
    tempoMosquito = 2000

}else if(nivel == 'dificil') {
    tempo = 60
    tempoMosquito = 1000
}else if(nivel == 'impossivel') {
    tempo = 60
    tempoMosquito = 900
} 


function ajustaArea() {
    largura = window.innerWidth;
    altura = window.innerHeight;
}
ajustaArea();

//Sistema Game Over
function sistemaGameOver(){ 
    document.getElementById('v' + vidas).src = "images/coracao_vazio.png"
    vidas--
    if (vidas == 0) {
        window.location.href = 'game_over.html'
    }
}

//Sistema Cronômetro
var cronometro = setInterval(function() {
    document.getElementById('cronometro').innerHTML = "Tempo restante: " + tempo
    tempo--
    if(tempo < 0 && vidas > 0) {
        window.location.href = 'game_win.html'
        clearInterval(cronometro) 
        clearInterval(gerarMosquitoTempo) }
},1000)

//Sistema Gerar Mosquito
function gerarMosquito() 
{ 
    //APAGAR MOSQUITO ANTERIOR E CHAMAR FUNCION GAME OVER CASO PERCA
    if(document.getElementById('mosquito')) {    
        document.getElementById('mosquito').remove();
        sistemaGameOver();
    }

    //DECLARAR POSIÇÃO ALEATÓRIA AO MOSQUITO
    var posicaoX = parseInt(Math.random() * largura) - 90
    var posicaoY = parseInt(Math.random() * altura) - 90
    posicaoX = posicaoX < 0 ? 0 : posicaoX 
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //CRIANDO O MOSQUITO E COLOCANDO POSIÇÃO ALEATÓRIA ------------
    var mosquito = document.createElement('img')
    mosquito.className = 'mosquito' + ladoAleatoiro() + tamanhoAleatório()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.id = 'mosquito'
    mosquito.src = 'images/mosca.png'
    document.body.appendChild(mosquito)

    mosquito.onclick = function() {
        this.remove();
    }
}
//GERANDO O MOSQUITO A CADA 1 SEGUNDO
var gerarMosquitoTempo = setInterval(function() {
    gerarMosquito()
},1000)

//GERANDO TAMANHO E LADO ALEATÓRIO PARA O MOSQUITO
function ladoAleatoiro() {
    lado = Math.floor(Math.random() * 2)
    switch(lado) {
            case 0:
        return ' flip'
        case 1:
            return ' noflip'
}
}
function tamanhoAleatório() {
    tamanho = Math.floor(Math.random() * 3)
    console.log(tamanho)
    switch(tamanho) {
        case 0:
            return ' tamanho1'
        case 1:
            return' tamanho2'            
        case 2:
            return' tamanho3'
}
}




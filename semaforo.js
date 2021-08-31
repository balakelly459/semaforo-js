"use strict"

const semaforo = document.getElementById("semaforo")
let idInterval

function botoesCores(corVermelho, corAmarelo, corVerde){
    const vermelho = document.getElementById("vermelho")
    const amarelo = document.getElementById("amarelo")
    const verde = document.getElementById("verde")
}

function semaforoVermelho() {
    document.getElementById("semaforo").src = "img/vermelho.png"
}
function semaforoAmarelo() {
    document.getElementById("semaforo").src = "img/amarelo.png"
}
function semaforoVerde() {
    document.getElementById("semaforo").src = "img/verde.png"
}


//eventos
document.getElementById("vermelho").addEventListener("click", semaforoVermelho)
document.getElementById("amarelo").addEventListener("click", semaforoAmarelo)
document.getElementById("verde").addEventListener("click", semaforoVerde)
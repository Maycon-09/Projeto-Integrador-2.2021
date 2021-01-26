var acertos = 0; //contador de acertos
var erros = 0; //contador de erros

const cardBoard = document.querySelector("#soma");
const objectsLifeBoard = document.querySelector("#menuS");
const objectsCoinsBoard = document.querySelector("#menuI");
const objectsLife = [
    "Life.png",
];
let objectLife  = [objectsLife[0]];
    objectLife.forEach(img => {
        objectLife = `
        <div  data-card= "${img}">
            <img  src= "/images/Collectable Object/${img}"> 
        </div>
        `
    });
objectsLifeBoard.innerHTML = objectLife + objectLife + objectLife;

function removerVida(acertos, erros){
    if (acertos >= 0 && acertos <= 3){ 

    } else if(erros >=0 && acertos <=3) {
        if(erros == 1){
            objectsLifeBoard.removeAttribute("img");
        } else if(erros == 2){
            objectsLifeBoard.removeAttribute("img");
        } else if(erros = 0){
            objectsLifeBoard.removeAttribute("img");
        }

    }

}
// Menu Superior - Vidas

const objectsCoins = [
    "Coin_01.png",
    "Coin_02.png",
    "Coin_03.png",
    "Coin_04.png",
    "Coin_05.png",
    "Coin_06.png",
];
let objectCoins  = "";
    objectsCoins.forEach(img => {
        objectCoins += `
        <div class= "D-moedas" data-card= "${img}">
            <img  class= "moedas" src= "/images/Collectable Object/${img}"> 
        </div>
        `
    });
objectsCoinsBoard.innerHTML = objectCoins;
// Menu Inferior - Animação moedas

const imagens = [
    "N 00.png",
    "N 01.png",
    "N 02.png",
    "N 03.png",
    "N 04.png",
    "N 05.png",
    "N 06.png",
    "N 07.png",
    "N 08.png",
    "N 09.png",
   // "N 10.png",
];
let randFir = Math.floor(Math.random() * imagens.length);
let randSec = Math.floor(Math.random() * imagens.length);
let cardFirHTML = [imagens[randFir]];
let cardSecHTML = [imagens[randSec]];
let cardOperacaoHTML = "";

console.log(randFir, randSec)
    cardFirHTML.forEach(img => {
        cardFirHTML = `
            <div class= "card" data-card= "${img}">
                <img id= "${randFir}" class= "card-face" src= "/images/${img}"> 
                <img class= "frontal-face" src= "/images/frontal.png">
            </div>
            `
        });

    cardOperacaoHTML += `
            <div class= "card" data-card= "Operacao.png">
                    <img class= "frontal-face" src= "/images/operacao.png"> 
            </div>
            `
        ;
        
    cardSecHTML.forEach(img => {
    cardSecHTML = `
        <div class= "card" data-card= "${img}">
                <img id= "${randSec} "class= "card-face" src= "/images/${img}"> 
                <img class= "frontal-face" src= "/images/frontal.png">
        </div>
        `
    });

cardBoard.innerHTML = cardFirHTML + cardOperacaoHTML + cardSecHTML ;
/** Fim HTML */ 

var cards = document.querySelectorAll(".card");
let firstCard, secondCard;
let lockCard = false;

function verificarResposta(){
    let resposta = parseInt(document.getElementById("resposta"));
    alert(randFir+randSec);
    console.log(typeof (randFir + randSec));
    console.log(typeof resposta);
    checkForMatch();   
}
// verifica as respostas

function flipCard(){
    if(lockCard) return false;
    cards[0].classList.add("flip");
    cards[2].classList.add("flip");
} // vira carta

function checkForMatch(){

    let isMatch = (randFir + randSec) == resposta.value;   console.log(isMatch);
    //!isMatch ?  resertCards(isMatch):disableCards();
    if(isMatch) {
        alert("Parabéns !!! Você acertou a resposta.");
        acertos++; 
        disableCards();
        removerVida(acertos, erros);
    } else {
        alert("Resposta errada !!! Não desista, tente novamente.");
        erros++;
        removerVida(acertos, erros);
    }
    console.log(acertos, erros);
} // checa resposta 

function disableCards(isMatch){
    setTimeout(() => { 
    cards[0].classList.remove("flip");
    cards[2].classList.remove("flip");
    resertCards(isMatch);
}, 500);
} 
// vira carta -- SE: resposta for correta

function resertCards(isMatch = null) {
    if(isMatch == null){
        cards[0].removeEventListener("click", flipCard);
        cards[2].removeEventListener("click", flipCard);
    }
    [randFir, randSec, firstCard, secondCard, cardFirHTML, cardSecHTML, cards] = [null, null, null, null, null, null, null];
// Zera todas as variaveis utilizadas no processo
    
// Inicia se o reset das cartas possibilitando troca das cartas
    randFir = Math.floor(Math.random() * imagens.length);
    randSec = Math.floor(Math.random() * imagens.length);
    cardFirHTML = [imagens[randFir]];
    cardSecHTML = [imagens[randSec]];
    //console.clear();
    console.log(randFir, randSec)
    cardFirHTML.forEach(img => {
        cardFirHTML = `
            <div class= "card" data-card= "${img}">
                <img id= "${randFir}" class= "card-face" src= "/images/${img}"> 
                <img class= "frontal-face" src= "/images/frontal.png">
            </div>
            `
        });

    cardSecHTML.forEach(img => {
    cardSecHTML = `
        <div class= "card" data-card= "${img}">
                <img id= "${randSec} "class= "card-face" src= "/images/${img}"> 
                <img class= "frontal-face" src= "/images/frontal.png">
        </div>
        `
    });
    cardBoard.innerHTML = cardFirHTML + cardOperacaoHTML + cardSecHTML ;
// As cartas são trocadas    

    cards = document.querySelectorAll(".card");
    cards.forEach(card => card.addEventListener("click", flipCard));
// Adiciona as cartas na Variavel cards 

    flipCard();
}

cards.forEach(card => card.addEventListener("click", flipCard));
//adiciona evento na primeira rodada

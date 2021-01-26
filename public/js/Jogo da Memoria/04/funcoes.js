var acertos= 0;
const cardBoard = document.querySelector("#memoria");
const imagensNum = [
    "N 00.png",
 //   "N 01.png",
//    "N 02.png",
    "N 03.png",
 //   "N 04.png",
    "N 05.png",
 //   "N 06.png",
    "N 07.png",
    //"N 08.png",
    //"N 09.png",
    //"N 10.png",
];

const imagensDed = [
 //   "D 00.png",
    "D 01.png",
 //   "D 02.png",
 //   "D 03.png",
    "D 04.png",
 //  "D 05.png",
    "D 06.png",
 //   "D 07.png",
    //"D 08.png",
    "D 09.png",
    //"D 10.png", 
];


let cardFirHTML = "";
let cardSecHTML = "";

imagensNum.forEach(img => {
    cardFirHTML += `
    <div class= "card" data-card= "${img}">
            <img class= "card-face" src= "/images/${img}"> 
            <img class= "frontal-face" src= "/images/frontal.png">
    </div>
    `
});

imagensDed.forEach(img => {
    cardSecHTML += `
    <div class= "card" data-card= "${img}">
            <img class= "card-face" src= "/images/${img}"> 
            <img class= "frontal-face" src= "/images/frontal.png">
    </div>
    `
});


cardBoard.innerHTML = cardFirHTML + cardFirHTML + cardSecHTML + cardSecHTML;

/** Fim HTML */

const cards = document.querySelectorAll(".card");
let firstCard, secondCard;
let lockCard = false;

function flipCard(){
    if(lockCard) return false;
    this.classList.add("flip");
    
    if(!firstCard){
        firstCard = this;

        return false;
    }
     secondCard = this;
     checkForMatch();
}

function checkForMatch(){
    let isMatch = firstCard.dataset.card === secondCard.dataset.card;   console.log(isMatch);
    !isMatch ? disableCards(): resertCards(isMatch);
    if(isMatch==true){
        acertos++;
    fimDeJogo();
    };

}

function disableCards(){
    lockCard = true;
    setTimeout(() => { 
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resertCards();
}, 500);
}

(function shuffle(){
    cards.forEach( card =>{
        let rand = Math.floor(Math.random() * 16);
        card.style.order = rand;
    })


})()

function resertCards(isMatch = false) {
    if(isMatch){
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
    }
    [firstCard, secondCard, lockCard ] = [null, null, false];
}

function fimDeJogo() {
    let x = 35;
    let y = 0;
    if(acertos == 8){
        // Exibe POP UP
        setTimeout(() => {
            document.querySelector(".bg-modal").style.display = "flex";
            //alert("Parabéns !! Você finalizou o nível 01");  
            document.querySelector(".fechar").addEventListener('click', function() {
                document.querySelector(".bg-modal").style.display = "none";
            });  
        }, 500);
        // Cria o intervalo para movimentar o character
        setInterval(() => {
            x++;
            document.querySelector(".character").style.transform = `translate(${x}px, ${y}px)`;
            if (x > 475){ x = -35}; 
        }, 23);  
}}

cards.forEach(card => card.addEventListener("click", flipCard));
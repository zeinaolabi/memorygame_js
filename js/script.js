//Initailized variables
const cards = document.querySelectorAll('.card');
let flipped = false;
let firstCard;
let secondCard;

function flipCard(){
    this.classList.add('flip');

    if (!flipped) {
        flipped = true;
        firstCard = this;
        return;
   }

    secondCard = this;
    
    if(secondCard != firstCard){
        flipped = false;
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));

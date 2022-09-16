//Initailized variables
const cards = document.querySelectorAll('.card');
let flipped = false;
let firstCard;
let secondCard;

//Flip cards 
function flipCard(){
    //Add the class flip to *this* (the object that called the function)
    this.classList.add('flip');

    //If a card hasnt been fliped, save the object as the first card
    if (!flipped) {
        flipped = true;
        firstCard = this;
        return;
    }

   //Save the second card
    secondCard = this;
    
    //If the first and second card aren't the same, find if they're duplicates
    if(secondCard != firstCard){
        flipped = false;
        findDuplicate();
    }
}

findDuplicate = () => {
    //Check the id of the first and second card
    if(firstCard.id != secondCard.id) {
        //Set a timer to 500ms before running the function
        setTimeout(disableCard, 500);
        return;
    }
}

hideCard = () => {
}
 

cards.forEach(card => card.addEventListener('click', flipCard));

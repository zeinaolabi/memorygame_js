//Initailized variables
const cards = document.querySelectorAll('.card');
let flipped = false;
let firstCard;
let secondCard;
let twoFlipped = false;

function flipCard(){
    //If two cards are already flipped, stop
    if(twoFlipped){
        return
    }

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
        twoFlipped = true;
        flipped = false;
        findDuplicate();
    }
}

findDuplicate = () => {
    /*If the cards have the same ids, hide them
      if they dont, unflip them*/    
    if(firstCard.id != secondCard.id) {
        //Set a timer to 500ms before running the function
        setTimeout(disableCard, 500);
        return;
    }
    setTimeout(hideCard, 500);
}

hideCard = () => {
    //Make the cards disappear
    firstCard.style.visibility = "hidden";
    secondCard.style.visibility = "hidden";
    twoFlipped = false;
}
 
disableCard = () => {
    //Remove flip class (unflip cards)
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    twoFlipped = false;
}

//For each card, add on click event
cards.forEach(card => card.addEventListener('click', flipCard));

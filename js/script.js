//Initailized variables
const cards = document.querySelectorAll(".card");
const score = document.getElementById("score");
const rows = document.querySelectorAll(".row");
let flipped = false;
let twoFlipped = false;
let firstCard;
let secondCard;
let currentScore = 0;

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
        if(currentScore != 0){
            currentScore -= 5;
        }
        score.textContent = currentScore;
        return;
    }
    setTimeout(hideCard, 500);
    currentScore +=10;
    score.textContent = currentScore;
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

shuffle = () => {
    //For each row, change the order
    rows.forEach(row => {
        let ramdomPos = Math.floor(Math.random() * 2);
        row.style.order = ramdomPos;
      });

    //For each card, change the order
    cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 3);
      card.style.order = ramdomPos;
    });
};

//Shuffle cards
shuffle();

//For each card, add on click event
cards.forEach(card => card.addEventListener('click', flipCard));

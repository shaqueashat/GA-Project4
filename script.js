let pieces = document.querySelectorAll('.game_pieces');

let userFlipsCard = false;
let firstCard, secondCard;

function flipOver() {
    this.classList.toggle('flip');


if (!userFlipsCard) {
    //first time the user clicks the card
    userFlipsCard = true;
    firstCard = this;

   
    } else {
        //second time the user clickes the card
        userFlipsCard = false;
        secondCard = this;
        
       
    }
}

pieces.forEach(piece => piece.addEventListener('click', flipOver));



let pieces = document.querySelectorAll('.game_pieces');
let lockBoard = false;
let userFlipsCard = false;
let firstCard, secondCard;

function flipOver() {
    if (lockBoard) return;

        this.classList.add('flip');


    if (!userFlipsCard) {
    
        userFlipsCard = true;
        firstCard = this;

   
   } else {
        
       userFlipsCard = false;
       secondCard = this;
       
       checkForMatch(); 
   }
}
function checkForMatch() {
       if (firstCard.dataset.image === 
           secondCard.dataset.image) {
            disableCards();
       } else {
            unflipCards();
      }
    }

    function disableCards() {
      firstCard.removeEventListener('click', flipOver);
      secondCard.removeEventListener('click', flipOver);
    }
    
    function unflipCards() {
        lockBoard = true; 

      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockBoard = false;
    }, 2000); 
}

pieces.forEach(piece => piece.addEventListener('click', flipOver));
    

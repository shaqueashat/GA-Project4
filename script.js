let pieces = document.querySelectorAll('.game_pieces');
let lockBoard = false;
let userFlipsCard = false;
let firstCard, secondCard;

function flipOver() {
    if (lockBoard) return;
    if (this === firstCard) return;

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

        resetBoard();
    }
    
    function unflipCards() {
        lockBoard = true; 

      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 2000); 
}

function resetBoard() {
    [userFlipsCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffleCards() {
    pieces.forEach(piece => {
        let randomPos = Math.floor(Math.random() * 18);
        piece.style.order = randomPos;
    });
})();

pieces.forEach(piece => piece.addEventListener('click', flipOver));
    

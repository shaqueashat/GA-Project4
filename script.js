let pieces = document.querySelectorAll('.game_pieces');

let userFlipsCard = false;
let firstCard, secondCard;

function flipOver() {
   this.classList.add('flip');


if (!userFlipsCard) {
    
   userFlipsCard = true;
   firstCard = this;

   
   } else {
        
       userFlipsCard = false;
       secondCard = this;
        
       if (firstCard.dataset.image === 
           secondCard.dataset.image) {
            
           firstCard.removeEventListener('click', flipOver);
           secondCard.removeEventListener('click', flipOver);
       } else {
            
           setTimeout(() => {
           firstCard.classList.remove('flip');
           secondCard.classList.remove('flip');
       }, 2000); 
      }
   }
}

pieces.forEach(piece => piece.addEventListener('click', flipOver));
    

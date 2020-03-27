let piece = document.querySelectorAll(".game_pieces");

function flipOver() {
    this.classList.toggle('flip');
}

piece.forEach(piece => piece.addEventListener('onclick', flipOver) )


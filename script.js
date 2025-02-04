document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const nextButton = document.getElementById('next-button');
    const revealButton = document.getElementById('reveal-button');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const music = document.getElementById('background-music');
    const puzzleContainer = document.querySelector('.puzzle-container');
    let puzzleCompleted = false;
    
    startButton.addEventListener('click', () => {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('story').style.display = 'flex';
        music.play();
    });
    
    nextButton.addEventListener('click', () => {
        document.getElementById('story').style.display = 'none';
        document.getElementById('game').style.display = 'flex';
        generatePuzzle();
    });
    
    revealButton.addEventListener('click', () => {
        if (puzzleCompleted) {
            document.getElementById('game').style.display = 'none';
            document.getElementById('finale').style.display = 'flex';
        } else {
            alert('Complete the puzzle first!');
        }
    });
    
    function generatePuzzle() {
        puzzleContainer.innerHTML = '';
        const pieces = ['❤️', '💖', '💕', '💞'];
        pieces.sort(() => Math.random() - 0.5);
        
        pieces.forEach((piece, index) => {
            const btn = document.createElement('button');
            btn.textContent = piece;
            btn.dataset.index = index;
            btn.addEventListener('click', checkPuzzle);
            puzzleContainer.appendChild(btn);
        });
    }
    
    function checkPuzzle() {
        const buttons = Array.from(puzzleContainer.children);
        const correctOrder = ['❤️', '💖', '💕', '💞'];
        const currentOrder = buttons.map(btn => btn.textContent);
        
        if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
            puzzleCompleted = true;
            revealButton.disabled = false;
            alert('Puzzle solved! Click Reveal Surprise!');
        }
    }
    
    yesButton.addEventListener('click', () => {
        alert('Yay! I knew you would say yes! 💖');
    });
    
    noButton.addEventListener('click', () => {
        alert('Oh no! 😢 But I still love you!');
    });
});
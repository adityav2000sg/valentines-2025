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
        const pieces = [
            { emoji: '❤️', correctIndex: 0 },
            { emoji: '💖', correctIndex: 1 },
            { emoji: '💕', correctIndex: 2 },
            { emoji: '💞', correctIndex: 3 }
        ];
        pieces.sort(() => Math.random() - 0.5);

        pieces.forEach((piece, index) => {
            const btn = document.createElement('button');
            btn.textContent = piece.emoji;
            btn.dataset.index = index;
            btn.classList.add('puzzle-piece');
            puzzleContainer.appendChild(btn);
        });

        puzzleContainer.addEventListener('click', handlePuzzleClick);
    }

    function handlePuzzleClick(event) {
        if (!event.target.classList.contains('puzzle-piece')) return;

        const buttons = Array.from(puzzleContainer.children);
        const currentOrder = buttons.map(btn => btn.textContent);
        const correctOrder = ['❤️', '💖', '💕', '💞'];

        if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
            puzzleCompleted = true;
            revealButton.disabled = false;
            alert('Puzzle solved! Click Reveal Surprise!');
        } else {
            alert('Keep trying to arrange the pieces!');
        }
    }

    yesButton.addEventListener('click', () => {
        alert('Yay! I knew you would say yes! 💖');
    });

    noButton.addEventListener('click', () => {
        alert('Oh no! 😢 But I still love you!');
    });
});

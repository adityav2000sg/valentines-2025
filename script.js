document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const nextButton = document.getElementById('next-button');
    const revealButton = document.getElementById('reveal-button');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const music = document.getElementById('background-music');
    const displayArea = document.querySelector('.sprite-heart-container');

    startButton.addEventListener('click', () => {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('story').style.display = 'flex';
        music.play();
    });

    nextButton.addEventListener('click', () => {
        document.getElementById('story').style.display = 'none';
        document.getElementById('heart-display').style.display = 'flex';
        createHeart();
    });

    revealButton.addEventListener('click', () => {
        document.getElementById('heart-display').style.display = 'none';
        document.getElementById('finale').style.display = 'flex';
    });

    function createHeart() {
        const heartPattern = [
            ".....❤️❤️.....",
            "...❤️❤️❤️❤️...",
            "..❤️❤️❤️❤️❤️❤️..",
            ".❤️❤️❤️❤️❤️❤️❤️❤️.",
            "❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️",
            ".❤️❤️❤️❤️❤️❤️❤️❤️.",
            "..❤️❤️❤️❤️❤️❤️..",
            "...❤️❤️❤️❤️...",
            ".....❤️❤️....."
        ];

        heartPattern.forEach(row => {
            const rowDiv = document.createElement('div');
            rowDiv.textContent = row;
            rowDiv.style.textAlign = 'center';
            rowDiv.style.fontSize = '2rem';
            displayArea.appendChild(rowDiv);
        });
    }

    yesButton.addEventListener('click', () => {
        alert('Yay! I knew you would say yes! 💖');
    });

    noButton.addEventListener('click', () => {
        alert('Oh no! 😢 But I still love you!');
    });
});

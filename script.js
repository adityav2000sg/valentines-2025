document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const nextButton = document.getElementById('next-button');
    const revealButton = document.getElementById('reveal-button');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const music = document.getElementById('background-music');
    
    startButton.addEventListener('click', () => {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('story').style.display = 'flex';
        music.play();
    });
    
    nextButton.addEventListener('click', () => {
        document.getElementById('story').style.display = 'none';
        document.getElementById('game').style.display = 'flex';
    });
    
    revealButton.addEventListener('click', () => {
        document.getElementById('game').style.display = 'none';
        document.getElementById('finale').style.display = 'flex';
    });
    
    revealButton.disabled = false;

    yesButton.addEventListener('click', () => {
        alert('Yay! I knew you would say yes! 💖');
    });
    
    noButton.addEventListener('click', () => {
        alert('Oh no! 😢 But I still love you!');
    });
});
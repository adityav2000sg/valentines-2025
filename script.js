document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const nextButton = document.getElementById('next-button');
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
        const heartDisplay = document.getElementById('heart-display');
        if (!heartDisplay) {
            console.error('Element with id "heart-display" is missing in the HTML.');
            return;
        }
        heartDisplay.style.display = 'flex';
        createHeart();
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

        heartPattern.forEach((row, index) => {
            const rowDiv = document.createElement('div');
            rowDiv.textContent = row;
            rowDiv.style.textAlign = 'center';
            rowDiv.style.fontSize = `${2 + index * 0.5}rem`;
            rowDiv.style.animation = `fadeIn 1s ease ${index * 0.2}s forwards`;
            rowDiv.style.opacity = 0;
            displayArea.appendChild(rowDiv);
        });

        const questionDiv = document.createElement('div');
        questionDiv.textContent = "Will You Be My Valentine? 💖";
        questionDiv.style.textAlign = 'center';
        questionDiv.style.fontSize = '3rem';
        questionDiv.style.marginTop = '20px';
        questionDiv.style.animation = 'fadeIn 2s ease 2s forwards';
        questionDiv.style.opacity = 0;
        displayArea.appendChild(questionDiv);
    }

    yesButton.addEventListener('click', () => {
        alert('Yay! I knew you would say yes! 💖');
    });

    noButton.addEventListener('click', () => {
        alert('Oh no! 😢 But I still love you!');
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
});
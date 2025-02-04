document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const nextButton = document.getElementById('next-button');
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

        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.justifyContent = 'center';
        buttonContainer.style.marginTop = '20px';
        buttonContainer.style.gap = '20px';

        const yesButton = document.createElement('button');
        yesButton.textContent = '💖 Yes 💖';
        yesButton.style.padding = '10px 20px';
        yesButton.style.fontSize = '1.5rem';
        yesButton.style.backgroundColor = '#ff477e';
        yesButton.style.color = 'white';
        yesButton.style.border = 'none';
        yesButton.style.borderRadius = '5px';
        yesButton.style.cursor = 'pointer';
        yesButton.addEventListener('click', () => {
            alert('Yay! I knew you would say yes! 💖');
        });

        const noButton = document.createElement('button');
        noButton.textContent = '💔 No 💔';
        noButton.style.padding = '10px 20px';
        noButton.style.fontSize = '1.5rem';
        noButton.style.backgroundColor = '#aaa';
        noButton.style.color = 'white';
        noButton.style.border = 'none';
        noButton.style.borderRadius = '5px';
        noButton.style.cursor = 'pointer';
        noButton.addEventListener('click', () => {
            alert('Oh no! 😢 But I still love you!');
        });

        buttonContainer.appendChild(yesButton);
        buttonContainer.appendChild(noButton);
        displayArea.appendChild(buttonContainer);
    }

    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
});
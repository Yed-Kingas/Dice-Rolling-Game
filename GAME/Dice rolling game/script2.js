document.addEventListener('DOMContentLoaded', function() {
    const dice = document.getElementById('dice');
    const rollButton = document.getElementById('roll-btn');
    const quitButton = document.getElementById('quit-btn');
    const message = document.getElementById('message');

    rollButton.addEventListener('click', function() {
        dice.classList.add('roll');
        setTimeout(() => {
            dice.classList.remove('roll');
            const rollResult = Math.floor(Math.random() * 6) + 1;
            const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
            dice.textContent = diceFaces[rollResult - 1];
            message.textContent = 'You rolled a ' + rollResult;
        }, 400); // Duration of the animation
    });

    quitButton.addEventListener('click', function() {
        message.textContent = 'Thank you for playing!';
        dice.textContent = '🎲'; // Reset dice face
        rollButton.disabled = true;
        quitButton.disabled = true;
    });
});

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
    // Create a wrapper div for the button and text
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    const btn = document.createElement('button');
    btn.classList.add('btn');

    // Apply a random rotation between -45° and 45°
    const randomRotation = Math.floor(Math.random() * 91) - 45; 
    btn.style.transform = `rotate(${randomRotation}deg)`;

    btn.addEventListener('click', () => {
        stopSounds();

        const audio = document.getElementById(sound);
        audio.play();

        // Apply a full 360-degree spin
        btn.style.animation = `spin ${audio.duration}s linear`;

        // Remove animation after it completes
        setTimeout(() => {
            btn.style.animation = '';
        }, audio.duration * 1000);
    });

    // Create the text below the CD
    const btnText = document.createElement('div');
    btnText.classList.add('btn-text');
    btnText.innerText = sound;

    // Append the button and text inside the wrapper
    btnContainer.appendChild(btn);
    btnContainer.appendChild(btnText);

    document.getElementById('buttons').appendChild(btnContainer);
});

function stopSounds() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}
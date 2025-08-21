// Vars
const WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
const BLACK_KEYS = ['w', 'e', 'r', 't', 'y'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

// Select all keys
const keys = document.querySelectorAll('.key')

// -- Listeners -- //
// Add an event listener to all keys 
keys.forEach((key) => {
    key.addEventListener('click', () => playNote(key));
});

// -- Handlers -- //
function playNote(key) {
    // Get the notes's letter value
    const noteAudio = document.getElementById(key.dataset.note);

    // Reset the note's current time to 0
    noteAudio.currentTime = 0;

    // Play th note //
    noteAudio.play();

    // Add a class, active, for styling purposes
    key.classList.add('active');

    // listen for when sound has ended and remove active class
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    });
}


document.addEventListener('keydown', (e) => {
    //get the key that triggered the event 
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    //if the key is being held down don't play the note again
    if (e.repeat) {
        return;
    }
    if (whiteKeyIndex > -1) {
        playNote(whiteKeys[whiteKeyIndex]);
    }
    if (blackKeyIndex > -1) {
        playNote(blackKeys[blackKeyIndex]);
    }
});



// Play ode to joy //

//Ode of joy trigger//
if (key === 'z') {
    playOdeToJoy();
}
// handelers 

function PlayOdeToJoy() {
    let delay = 0;
    OdeToJoy.forEach(({ note, duration }) => {
        setTimeout(() => {
            const keyElement = document.querySelector(`.key[data-note="${note}"]`);
            if (keyElement) {
                playNote(keyElement);
            }
        }, delay);
        delay += duration;
    });
}
const OdeToJoy = [
    { note: 'E', duration: 400 },
    { note: 'E', duration: 400 },
    { note: 'F', duration: 400 },
    { note: 'G', duration: 400 },
    { note: 'G', duration: 400 },
    { note: 'F', duration: 400 },
    { note: 'E', duration: 400 },
    { note: 'D', duration: 400 },
    { note: 'C', duration: 400 },
    { note: 'C', duration: 400 },
    { note: 'D', duration: 400 },
    { note: 'E', duration: 400 },
    { note: 'E', duration: 400 },
    { note: 'D', duration: 400 },
    { note: 'D', duration: 400 },
];

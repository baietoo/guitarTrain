'use strict'
let divString = document.getElementById('string-nr-container');
let btnStartPractice = document.getElementById('start-practice');
let btnStopPractice = document.getElementById('stop-practice');
let practiceInterval = null;
const stringNotes = [
    'A', 'A#', 'B', 'C', 'C#', 'D',
    'D#', 'E', 'F', 'F#', 'G', 'G#'
];

let interval = null;

// document.addEventListener('DOMContentLoaded', function () {
//     // writeStringNumber());

function startPractice() {
    while (divString.firstChild) {
        divString.removeChild(divString.firstChild);
    }
    divString.insertAdjacentHTML('afterbegin', `<h2 class="current-string">${getStringAndNote()}</h2>`);
};


btnStartPractice.addEventListener('click', () => {
    interval = prompt("Set interval in miliseconds");
    btnStartPractice.classList.add('d-none');
    btnStopPractice.classList.remove('d-none');
    divString.insertAdjacentHTML('afterbegin', `<h2 class="current-string">${getStringAndNote()}</h2>`);
    practiceInterval = setInterval(startPractice, interval);

    // let btnStopPractice = document.getElementById("stop-practice");
    // btnStopPractice.addEventListener('click', () => {
    //     clearInterval()
    // })

});

btnStopPractice.addEventListener('click', () => {
    clearInterval(practiceInterval);
    btnStopPractice.classList.add('d-none');
    btnStartPractice.classList.remove('d-none');
    divString.removeChild(divString.firstChild);
})
// divString.innerHTML = setInterval(() => {
// }, 1000);    
// });

// btnStopPractice.addEventListener('click', () => {
//     clearInterval(btnStartPractice);
// })

function getStringAndNote() {
    let stringNumbers = '123456';
    let stringNumber = Math.floor(Math.random() * (stringNumbers.length)) + 1;
    let stringNotesLength = stringNotes.length - 1;
    let index = Math.trunc(Math.random() * stringNotesLength);
    let stringNote = stringNotes[index];
    //let stringNote = stringNotes[Math.floor(Math.random() * (stringNotes.length)) + 1];
    return stringNumber + stringNote;
};

function highlightText(strings, ...values) {
    let str = '';
    for (let index = 0; index < strings.raw.length; index++) {
        if (index > 0) {
            str += `<b>${values[index-1]}</b>`;
        }
        str += strings.raw[index];
    }
    return str
};

// divStringNbr.addEventListener('click' () =>{

// });

// divStringNbr.setInterval(() => {
//     return divStringNbr.innerHTML= Math.random();
// }, 1000ms);


// function returnStringNumber (max) {
//     console.log( Math.floor(Math.random() * 6) + 1);
//     return Math.floor(Math.random() * max) + 1
// };

// function writeStringNumber() {
//     divString.innerText = returnStringNumber(5);
// }
const headline = document.getElementById('main-headline');
const resultNotifier = document.getElementById('result-notifier');
const nameBtn = document.getElementById('player-name-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const playersWeaponArsenal = document.getElementById('player-container');
const pName = document.getElementById('p-name');
const pComputer = document.getElementById('p-computer');
let playerScore = 0;
let computerScore = 0;

nameBtn.addEventListener('click', event => {
    event.preventDefault();
    const name = document.getElementById('player-name-text');
    pName.innerText = `${name.value}: 0 points`;
    name.value = '';
    name.setAttribute('disabled', 'disabled');
    nameBtn.setAttribute('disabled', 'disabled');
});

playersWeaponArsenal.addEventListener('click', rockPaperOrScissors);

playAgainBtn.addEventListener('click', event => {
    pComputer.innerText = 'computer: 0 points';
    const pNameArray = pName.innerText.split("");
    pNameArray[pNameArray.length-8] = 0;
    let newpNameText = pNameArray.join("");
    pName.innerText = newpNameText;
    playerScore = 0;
    computerScore = 0;
     pName.style.background = 'white';
    pComputer.style.background = 'white';
    headline.style.background = 'white';
    headline.innerText = 'Lets play rock paper scissors!';
    playersWeaponArsenal.addEventListener('click', rockPaperOrScissors);
    const computersChoice = document.getElementById('computers-choice');
    const playersChoice = document.getElementById('players-choice');
    playersChoice.setAttribute('src', `images/blank.PNG`);
    computersChoice.setAttribute('src', `images/blank.PNG`);
});

function playerGetsPoint(){
    pName.style.background = 'lightgreen';
    playerScore++;
    const pNameArray = pName.innerText.split("");
    pNameArray[pNameArray.length-8] = playerScore;
    let newpNameText = pNameArray.join("");
    pName.innerText = newpNameText;
    playerScore === 3 ? wonOrLost('Hooraaayy! You are victorious!', 'lightgreen') : '';
}

function computerGetsPoint(){
    pComputer.style.background = 'lightgreen';
    computerScore++;
    pComputer.innerText = `computer: ${computerScore} points`
    computerScore === 3 ? wonOrLost('Unfortunately, you kinda suck', 'red') : '';
}

function wonOrLost(result, color) {
    headline.style.background = color;
    headline.innerText = result;
    const playAgainInstructions = document.getElementById('needed-to-win');
    playAgainInstructions.innerText = '';
    playersWeaponArsenal.removeEventListener('click', rockPaperOrScissors);
}

function rockPaperOrScissors(event) {
    pName.style.background = 'white';
    pComputer.style.background = 'white';
    const weaponId = event.target.id;
    const computersChoice = document.getElementById('computers-choice');
    const playersChoice = document.getElementById('players-choice');
    let randomNumber = Math.ceil(Math.random()*3);
    playersChoice.setAttribute('src', `images/${weaponId}.PNG`);
    computersChoice.setAttribute('src', `images/weapon-${randomNumber}.PNG`);
    
    if(weaponId === `weapon-${randomNumber}`) {
        console.log('tie!');
    }else{
        switch (randomNumber) {
            case 1:
                weaponId === 'weapon-2' ? playerGetsPoint() : computerGetsPoint();
                break;
            case 2:
                weaponId === 'weapon-3' ? playerGetsPoint() : computerGetsPoint();
                break;
            case 3:
                weaponId === 'weapon-1' ? playerGetsPoint() : computerGetsPoint();
                break;
        }
    }
}
const resultNotifier = document.getElementById('result-notifier');
const nameBtn = document.getElementById('player-name-btn');
const playersWeaponArsenal = document.getElementById('player-container');
const pName = document.getElementById('p-name');
const pComputer = document.getElementById('p-computer');
let playerScore = 0;
let computerScore = 0;
const homePage = 'http://127.0.0.1:5500/index.html?';
const youLostPage = 'http://127.0.0.1:5500/html/youLost.html';
const youWonPage = 'http://127.0.0.1:5500/html/youWon.html';
let playersName;

nameBtn.addEventListener('click', event => {
    event.preventDefault();
    const name = document.getElementById('player-name-text');
    pName.innerText = `${name.value}: 0 points`;
    playersName = name;
    name.value = '';
    
    name.setAttribute('disabled', 'disabled');
    nameBtn.setAttribute('disabled', 'disabled');
});
playersWeaponArsenal.addEventListener('click', event => {
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
                weaponId === 'weapon-2' ? playerWins() : computerWins();
                 
                break;
            case 2:
                weaponId === 'weapon-3' ? playerWins() : computerWins();
                
                break;
            case 3:
                weaponId === 'weapon-1' ? playerWins() : computerWins();
                
                break;
        }
    }
});

function playerWins(){
    pName.style.background = 'green';
    playerScore++;
    
    playerScore === 3 ? window.location.href = youWonPage : '';
    let pNameText = pName.innerText;
    const pNameArray = pNameText.split("");
    pNameArray[pNameArray.length-8] = playerScore;
    let newpNameText = pNameArray.join("");
    pName.innerText = newpNameText;
}
function computerWins(){
    pComputer.style.background = 'green';
    computerScore++;
    computerScore === 3 ? window.location.href = youLostPage : '';
    pComputer.innerText = `computer: ${computerScore} points`
}


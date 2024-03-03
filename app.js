let score1 = 0;
let score2 = 0;
let maxScore = 3; 
let player1=document.querySelector('#player1');
let player2=document.querySelector('#player2');
let audioTurn = new Audio("ting.mp3")

function updateScore(player) {
    if (player === 1) {
        score1++;
    } else {
        score2++;
    }

    audioTurn.play();

    document.getElementById('p1').textContent = score1;
    document.getElementById('p2').textContent = score2;

    if (score1 === maxScore || score2 === maxScore) {
        endGame();
    }
}

function resetGame() {
    score1 = 0;
    score2 = 0;
    player1.disabled = false;
    player2.disabled = false;
    document.getElementById('p1').textContent = '0';
    document.getElementById('p2').textContent = '0';
    document.getElementById('p1').style.color = '#333';
    document.getElementById('p2').style.color = '#333';
}

function endGame() {
    if (score1 === maxScore) {
        document.getElementById('p1').style.color = 'green';
        document.getElementById('p2').style.color = 'red';
    } else {
        document.getElementById('p1').style.color = 'red';
        document.getElementById('p2').style.color = 'green';
    }

    player1.disabled = true;
    player2.disabled = true;
}

document.getElementById('maxscore').addEventListener('change', function () {
    maxScore = parseInt(this.value);
    resetGame();
});

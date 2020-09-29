import { countsAsAYes } from './counts-as-a-yes.js';

const button = document.getElementById('quiz-button');
const results = document.getElementById('results');

button.addEventListener('click', () => {

    results.classList.remove ('highlight-in-red', 'highlight-in-green');

    const userName = prompt('What is you name?');
    const userConfirmedQuiz = confirm(`${userName}, do you really want to take this quiz now?`);

    if (!userConfirmedQuiz) {
        alert('You decided to study more before taking the quiz!');
        return;
    }

    let correctAnswers = 0;

    const q1Response = prompt(`${userName}, did the father demonstrate a spider egg hatching for his children?`);

    if (countsAsAYes(q1Response)) {
        correctAnswers++;
    }

    const q2Response = prompt(`${userName}, are the spiders poisonous?`);

    if (countsAsAYes(q2Response)) {
        correctAnswers++;
    }

    const q3Response = prompt(`${userName}, do the children in the story live with both parents?`);

    if (!countsAsAYes(q3Response)) {
        correctAnswers++;
    }
    const resultsPercentage = Math.floor((correctAnswers / 3) * 100);

    if (correctAnswers > 2){
        results.classList.add('highlight-in-green');
        results.textContent = `${userName}, you answered ${correctAnswers} out of 3! That's ${resultsPercentage}%! You passed!`;
    } else {
        results.classList.add('highlight-in-red');
        results.textContent = `${userName}, you answered ${correctAnswers} out of 3! That's ${resultsPercentage}%! You shall not pass! Retake thine quiz!`;
    }

});
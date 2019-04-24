import scoreResult from './src/score-result.js';

const qOne = document.getElementById('q1');
const qTwo = document.getElementById('q2');
const qThree = document.getElementById('q3');
const qFour = document.getElementById('q4');
const qFive = document.getElementById('q5');
const submitButton = document.getElementById('submit-button');
const quizResult = document.getElementById('quiz-result');

submitButton.addEventListener('click', () => {
    const qOneAnswer = qOne.value;
    const qTwoAnswer = qTwo.value;
    const qThreeAnswer = qThree.value;
    const qFourAnswer = qFour.value;
    const qFiveAnswer = qFive.value;
});
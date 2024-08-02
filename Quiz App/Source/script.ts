import { questions } from './quiz';

interface Question {
    text: string;
    correctAnswer: boolean;
}

window.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz') as HTMLElement;
    const submitButton = document.getElementById('submit') as HTMLButtonElement;
    const resultContainer = document.getElementById('result') as HTMLElement;

    function renderQuiz(questions: Question[]) {
        questions.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');

            const questionText = document.createElement('p');
            questionText.textContent = `${index + 1}. ${question.text}`;
            questionDiv.appendChild(questionText);

            const trueLabel = document.createElement('label');
            trueLabel.innerHTML = `<input type="radio" name="question${index}" value="true"> True`;
            questionDiv.appendChild(trueLabel);

            const falseLabel = document.createElement('label');
            falseLabel.innerHTML = `<input type="radio" name="question${index}" value="false"> False`;
            questionDiv.appendChild(falseLabel);

            quizContainer.appendChild(questionDiv);
        });
    }

    function calculateResult(questions: Question[]) {
        let score = 0;
        questions.forEach((question, index) => {
            const selectedAnswer = (document.querySelector(`input[name="question${index}"]:checked`) as HTMLInputElement)?.value;
            if (selectedAnswer === String(question.correctAnswer)) {
                score++;
            }
        });

        const percentage = (score / questions.length) * 100;
        if (percentage >= 70) {
            resultContainer.textContent = 'Winner!';
        } else {
            resultContainer.textContent = `You scored ${percentage}%. Try again!`;
        }
    }

    renderQuiz(questions);
    submitButton.addEventListener('click', () => calculateResult(questions));
});

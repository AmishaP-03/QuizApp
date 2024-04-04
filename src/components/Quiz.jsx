import { useState } from "react";
import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.jsx';

export default function Quiz() {
    // To manage the currently active question displayed to the user
    // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

    // To store all the answers given by the user until this point
    const [userAnswers, setUserAnswers] = useState([]);

    // Example of derived state. Done to get rid of redundant state on line 5.
    const activeQuestionIndex = userAnswers.length;

    // Flag to check if all the questions are answered
    const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

    if (isQuizComplete) {
        return <div id="summary">
            <img src={quizCompleteImg} alt="Quiz complete!" />
            <h2>Quiz complete!</h2>
        </div>;
    }

    // To shuffle the answers before displaying on the UI
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((currentUserAnswers) => [...currentUserAnswers, selectedAnswer]);
    }

    return (
        <div id="quiz">
            <div id="questions">
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => <li key={answer} className="answer">
                        <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                    </li>)}
                </ul>
            </div>
        </div>
    );
}
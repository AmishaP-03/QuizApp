import { useState } from "react";
import QUESTIONS from '../questions.jsx';

export default function Quiz() {
    // To manage the currently active question displayed to the user
    // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

    // To store all the answers given by the user until this point
    const [userAnswers, setUserAnswers] = useState([]);

    // Example of derived state. Done to get rid of redundant state on line 5.
    const activeQuestionIndex = userAnswers.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((currentUserAnswers) => [...currentUserAnswers, selectedAnswer]);
    }

    return (
        <div id="quiz">
            <div id="questions">
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {QUESTIONS[activeQuestionIndex].answers.map((answer) => <li key={answer} className="answer">
                        <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                    </li>)}
                </ul>
            </div>
        </div>
    );
}
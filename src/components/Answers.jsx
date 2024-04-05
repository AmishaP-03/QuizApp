import { useRef } from 'react';
import QUESTIONS from '../questions.jsx';

export default function Answers({answers, selectedAnswer, answeredState, onSelectAnswer}) {
    // To shuffle the answers before displaying on the UI
    // We only want the answers to shuffle once, for the first time when the comonent is loaded (i.e when a question is loaded for the 1st time) and not when an answer is selected.
    // To achieve this, we will use Ref
    const shuffledAnswers = useRef();

    // Set it only when it is undefined, which would be the case when the component is loaded for the very 1st time.
    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
        {shuffledAnswers.current.map((answer) => {
            let cssClass = '';
            const isSelected = answer === selectedAnswer;
            if (isSelected && answeredState === 'answered') {
                cssClass = 'selected';
            }

            if (isSelected && (answeredState === 'correct' || answeredState === 'wrong')) {
                cssClass = answeredState;
            }
            
            return <li key={answer} className="answer">
                <button className={cssClass} onClick={() => onSelectAnswer(answer)}>{answer}</button>
            </li>
        })}
    </ul>
    )
}
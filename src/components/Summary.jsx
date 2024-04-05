import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.jsx';

export default function Summary({userAnswers}) {
    const noOfSkippedAnswers = userAnswers.filter((answer) => answer === '').length;
    const noOfCorrectAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]).length;
    const noOfWrongAnswers = userAnswers.length - noOfCorrectAnswers - noOfSkippedAnswers;

    const skippedAnsShare = Math.round((noOfSkippedAnswers / userAnswers.length) * 100);
    const correctAnsShare = Math.round((noOfCorrectAnswers / userAnswers.length) * 100);
    const wrongAnsShare = Math.round((noOfWrongAnswers / userAnswers.length) * 100);

    return <div id="summary">
        <img src={quizCompleteImg} alt="Quiz complete!" />
        <h2>Quiz complete!</h2>

        <div id="summary-stats">
            <p>
                <span className='number'>{skippedAnsShare}%</span>
                <span className='text'>skipped</span>
            </p>
            <p>
                <span className='number'>{correctAnsShare}%</span>
                <span className='text'>answered correctly</span>
            </p>
            <p>
                <span className='number'>{wrongAnsShare}%</span>
                <span className='text'>answered incorrectly</span>
            </p>
        </div>

        <ol>
            {userAnswers.map((answer, index) => {
                let cssClass = 'user-answer';
                if (answer === '') {
                    cssClass += ' skipped';
                } else if (answer === QUESTIONS[index].answers[0]) {
                    cssClass += ' correct';
                } else {
                    cssClass += ' wrong'
                }
                return <li key={index + '-' + answer}>
                    <h3>{index +1}</h3>
                    <p className='question'>{QUESTIONS[index].text}</p>
                    <p className={cssClass}>{answer || 'Skipped'}</p>
                </li>
            })}
        </ol>
    </div>;
}
import { useCallback, useState } from "react";
import QUESTIONS from '../questions.jsx';
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
    // To manage the currently active question displayed to the user
    // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

    // To store all the answers given by the user until this point
    const [userAnswers, setUserAnswers] = useState([]);
    const userAnswersLength = userAnswers.length;

    const [answeredState, setAnsweredState] = useState('');

    // Example of derived state. Done to get rid of redundant state on line 5.
    // Move to the next question only when the answer state is set to ''.
    let activeQuestionIndex = answeredState === '' ? userAnswersLength : userAnswersLength-1;

    // Putting out the function so that the following code is executed only when the answeredState, userAnswers and hence activeQuestionIndex is updated.
    if (answeredState === 'answered') {
        setTimeout(() => {
            if (userAnswers[activeQuestionIndex] === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnsweredState('correct');
            } else {
                setAnsweredState('wrong');
            }

            // Reset the answer state
            setTimeout(() => {
                setAnsweredState('');
            }, 2000);
        }, 1000);
    }

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnsweredState('answered');
        setUserAnswers((currentUserAnswers) => [...currentUserAnswers, selectedAnswer]);
    }, []);

    // To make sure that the function is not re-created again
    const handleSkipAnswer = useCallback(() => {
        setAnsweredState('');
        setUserAnswers((currentUserAnswers) => [...currentUserAnswers, '']);
    }, []);

    // Flag to check if all the questions are answered
    const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

    if (isQuizComplete) {
        return <Summary userAnswers={userAnswers}/>;
    }

    return (
        <div id="quiz">
            <div id="questions">
                {/* Upon state update, JSX code is only updated. Components are not destroyed and created again.
                The old instance of components continue to exist, just with updated values. However, for the progress timer to function
                properly, we want to create the QuestionTimer component whenever a new question is loaded.
                So, at the time of switching from one question to another, QuestionTimer should be unmounted and re-mounted to the DOM.
                This will not happen implicitly, thus causing issues in the progress bar (it would never reset upon encountering a new ques).
                This re-creation of components can be achieved using React's in-built key prop */}

                {/* QuestionTimer component will be instantiated for each question now */}
                {/* Thus, we will have a new timer and new interval set for each question */}
                <QuestionTimer key={activeQuestionIndex+'timer'} timeout={10000} onTimeout={handleSkipAnswer}/>
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <Answers
                    key={activeQuestionIndex+'-answer'} // We want te answers component to be re-created each time App comp executes (i.e upon each question change) so that answers are shuffled properly.
                    answers = {QUESTIONS[activeQuestionIndex].answers} 
                    selectedAnswer = {userAnswers[userAnswers.length - 1]}
                    answeredState = {answeredState}
                    onSelectAnswer = {handleSelectAnswer} // Answers component will make sure that the argument is passed to the function
                />
            </div>
        </div>
    );
}
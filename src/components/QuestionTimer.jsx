import { useEffect, useState } from "react";

export default function QuestionTimer({timeout, onTimeout}) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    // So that it does not execute again and again when remaining time state is updated.
    useEffect(() => {
        const timer = setTimeout(() => onTimeout(), timeout);
        return () => clearTimeout(timer);
    }, [timeout, onTimeout]);

    useEffect(() => {
        // Update the time on the progress bar every 10 ms
        const interval = setInterval(() => setRemainingTime((remainingTime) => remainingTime-10), 10);
        return () => clearInterval(interval);
    }, []);

    return <progress id="question-time" max={timeout} value={remainingTime} />;
}
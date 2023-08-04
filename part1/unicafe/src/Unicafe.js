import { useState } from "react";

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const average = (good - bad) / (good + neutral + bad);
    const positive = (good / (good + neutral + bad)) * 100;
    const all = good + neutral + bad;

    return (
        <div>
            <h1>Give Feedback</h1>
            <button onClick={() => setGood(good + 1)}>Good</button>
            <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
            <button onClick={() => setBad(bad + 1)}>Bad</button>
            {all === 0 ? (
                <p>No feedback given</p>
            ) : (
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    all={all}
                    average={average}
                    positive={positive}
                />
            )}
        </div>
    );
};

export default App;

function Statistics({ good, neutral, bad, all, average, positive }) {
    return (
        <>
            {" "}
            <h1>Statistics</h1>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>all: {all}</p>
            <p>Average: {average}</p>
            <p>Positive: {positive}%</p>
        </>
    );
}

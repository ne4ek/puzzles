import React, {useState} from 'react';
import puzzles from './Items.json';
import './Item.css'

function Item() {
    const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const handleAnswerClick = (selectedOption) => {
        const currentPuzzle = puzzles[currentPuzzleIndex];
        if (currentPuzzle.correct === selectedOption) {
            setCorrectAnswers(correctAnswers + 1);
        }
        if (currentPuzzleIndex < puzzles.length - 1) {
            setCurrentPuzzleIndex(currentPuzzleIndex + 1);
        } else {
            alert(`Правильных ответов: ${correctAnswers}`);
            setCurrentPuzzleIndex(0);
            setCorrectAnswers(0);
        }
    };

    return (
        <div className='container'>
            {puzzles[currentPuzzleIndex] && (
                <div className="puzzle">
                    <h2>Загадка {currentPuzzleIndex + 1}</h2>
                    <p>{puzzles[currentPuzzleIndex].description}</p>
                    <ul>
                        {puzzles[currentPuzzleIndex].options.map((option, index) => (
                            <li key={index}>
                                <button onClick={() => handleAnswerClick(index)}>
                                    {option}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Item;
// src/components/Quiz.tsx

import React, { useState } from "react";
import { quizData } from "./QuizData";

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const handleAnswerSelect = (selectedOption: string) => {
    setUserAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestion] = selectedOption;
      return updatedAnswers;
    });
  };

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const handleSubmit = () => {
    // Calculate and display the final answer
    const correctAnswers = quizData.filter(
      (question, index) => question.correctAnswer === userAnswers[index]
    );
    alert(`You got ${correctAnswers.length} out of ${quizData.length} questions correct!`);
  };

  const question = quizData[currentQuestion];

  if (!question) {
    // Quiz completed, show the final result
    return (
      <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Quiz Completed</h1>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit Answers
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{question.question}</h1>
      <ul>
        {question.options.map((option, i) => (
          <li key={i} className="mb-2">
            <label className="flex items-center">
              <input
                type="radio"
                name={`question_${currentQuestion}`}
                value={option}
                onChange={() => handleAnswerSelect(option)}
                className="mr-2"
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        {currentQuestion > 0 && (
          <button
            onClick={handlePrevious}
            className="bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray active:bg-gray-800"
          >
            Previous
          </button>
        )}
        {currentQuestion < quizData.length - 1 && (
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Next
          </button>
        )}
        {currentQuestion === quizData.length - 1 && (
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 ml-2"
          >
            Submit Answers
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;

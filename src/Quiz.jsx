import React from "react";
import {
  useQuiz,
  answerQuestion,
  prevQuestion,
  nextQuestion,
} from "./redux/quizz";

const HomeQuiz = () => {
  const { questions, currentQuestion } = useQuiz();
  const { title, id, alt1, alt2, alt3 } = questions[currentQuestion];

  const handleAnswerQuestion = (answer) => {
    answerQuestion({ answer });
  };

  return (
    <div className="flex justify-center items-center flex-col text-center">
      <h1 className="text-4xl font-extrabold mb-6">HomeQuiz</h1>

      <div className="w-full max-w-md space-y-4 space-x-10 mt-20">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleAnswerQuestion(alt1)}
        >
          {alt1}
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleAnswerQuestion(alt2)}
        >
          {alt2}
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleAnswerQuestion(alt3)}
        >
          {alt3}
        </button>
      </div>

      <div className="mt-6">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={prevQuestion}
        >
          Previous
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={nextQuestion}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomeQuiz;

import { useQuiz, startQuiz } from "./redux/quizz";

function Result() {
  const { score, questions } = useQuiz();

  return (
    <div className="p-4 ">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-800">Quiz Results</h1>
      </div>
      <div className="mt-8 flex flex-col items-center">
        <p className="text-2xl font-bold text-center text-gray-800">
          Number of correct answers:{" "}
          <span className="text-green-600">{score}</span> /{" "}
          <span className="text-gray-900">{questions.length}</span>
        </p>
      </div>
      <div className="mt-8 flex justify-center">
        <button
          className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          onClick={() => startQuiz()}
        >
          Take Another Quiz
        </button>
      </div>
    </div>
  );
}

export default Result;

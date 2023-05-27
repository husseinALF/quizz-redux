import { useQuiz, startQuiz } from "./redux/quizz";
import Quiz from "./Quiz";
import Result from "./Result";

function HomeQuiz() {
  const { showResult, quizzStarted } = useQuiz();

  function render() {
    if (showResult) {
      return <Result />;
    } else if (quizzStarted) {
      return <Quiz />;
    } else {
      return (
        <div className="w-full flex justify-center items-center h-screen">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-16 px-28 rounded  flex justify-center items-center text-6xl"
            onClick={() => startQuiz()}
          >
            Starta Quiz
          </button>
        </div>
      );
    }
  }

  return <div className="flex flex-col">{render()}</div>;
}

export default HomeQuiz;

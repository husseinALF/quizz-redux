import { addQuestion } from "./redux/quizz";
import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState();
  const [alt1, setAddA1] = useState();
  const [alt2, setAddA2] = useState();
  const [alt3, setAddA3] = useState();
  const [correctAnswer, setAnswer] = useState();

  function handleAddQ() {
    const qustion = {
      title,
      alt1,
      alt2,
      alt3,
      id: Date.now(),
      correctAnswer,
    };
    addQuestion(qustion);
  }
  return (
    <div className="flex justify-center items-center flex-col p-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Add Question</h2>
      <div className="flex flex-col mb-4">
        <label className="text-lg font-bold text-gray-800 mb-2">Question</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          className="py-2 px-3 rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="text-lg font-bold text-gray-800 mb-2">
          Answer one
        </label>
        <input
          type="text"
          onChange={(e) => setAddA1(e.target.value)}
          className="py-2 px-3 rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="text-lg font-bold text-gray-800 mb-2">
          Answer second
        </label>
        <input
          type="text"
          onChange={(e) => setAddA2(e.target.value)}
          className="py-2 px-3 rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="text-lg font-bold text-gray-800 mb-2">
          Answer third
        </label>
        <input
          type="text"
          onChange={(e) => setAddA3(e.target.value)}
          className="py-2 px-3 rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="text-lg font-bold text-gray-800 mb-2">
          Correct Answer
        </label>
        <input
          type="text"
          onChange={(e) => setAnswer(e.target.value)}
          className="py-2 px-3 rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
      </div>

      <button
        onClick={handleAddQ}
        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md"
      >
        Add question
      </button>
    </div>
  );
};

export default Create;

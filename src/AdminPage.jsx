import React from "react";
import { useState } from "react";
import Create from "./Create";
import { deleteQuestion } from "./redux/quizz";

const AdminPage = () => {
  const [title, setTitle] = useState();
  return (
    <div>
      <Create />
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded" />
      <div className="flex justify-center items-center flex-col p-4 space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Delete question
        </h2>

        <label className="text-lg font-bold text-gray-800 mb-2">Title</label>
        <input
          className="py-2 px-3 rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md"
          onClick={() => deleteQuestion(title)}
        >
          Delete Question
        </button>
      </div>
    </div>
  );
};

export default AdminPage;

import { createReduxModule } from "hooks-for-redux";

const initialState = {
  quizzStarted: false,
  showResult: false,
  currentQuestion: 0,
  score: 0,
  questions: [
    {
      title: "What is the capital of Sweden?",
      alt1: "Stockholm",
      alt2: "London",
      alt3: "Rome",
      correctAnswer: "Stockholm",
      id: 1,
    },
    {
      title: "Which planet is known as the Red Planet?",
      alt1: "Mars",
      alt2: "Venus",
      alt3: "Jupiter",
      correctAnswer: "Mars",
      id: 2,
    },
    {
      title: "Who painted the Mona Lisa?",
      alt1: "Leonardo da Vinci",
      alt2: "Pablo Picasso",
      alt3: "Vincent van Gogh",
      correctAnswer: "Leonardo da Vinci",
      id: 3,
    },
    {
      title: "Which country is home to the Taj Mahal?",
      alt1: "India",
      alt2: "China",
      alt3: "Japan",
      correctAnswer: "India",
      id: 4,
    },
    {
      title: "Which animal is known as the 'King of the Jungle'?",
      alt1: "Lion",
      alt2: "Tiger",
      alt3: "Elephant",
      correctAnswer: "Lion",
      id: 5,
    },
    {
      title: "What is the largest ocean in the world?",
      alt1: "Pacific Ocean",
      alt2: "Atlantic Ocean",
      alt3: "Indian Ocean",
      correctAnswer: "Pacific Ocean",
      id: 6,
    },
    {
      title: "Who wrote the play 'Romeo and Juliet'?",
      alt1: "William Shakespeare",
      alt2: "Jane Austen",
      alt3: "George Orwell",
      correctAnswer: "William Shakespeare",
      id: 7,
    },
    {
      title: "What is the chemical symbol for gold?",
      alt1: "Go",
      alt2: "Au",
      alt3: "Gd",
      correctAnswer: "Au",
      id: 8,
    },
  ],
};

export const [
  useQuiz,
  {
    addQuestion,
    updateQuestion,
    deleteQuestion,
    prevQuestion,
    nextQuestion,
    answerQuestion,
    startQuiz,
  },
] = createReduxModule("quiz", initialState, {
  addQuestion: (state, question) => {
    return {
      ...state,
      questions: [...state.questions, question],
    };
  },
  updateQuestion: (state, { id, title, alt1, alt2, alt3 }) => {
    return {
      ...state,
      questions: state.questions.map((question) => {
        if (question.id === id) {
          return {
            ...question,
            title,
            alt1,
            alt2,
            alt3,
          };
        }
        return question;
      }),
    };
  },
  deleteQuestion: (state, id) => {
    return {
      ...state,
      questions: state.questions.filter((question) => question.id !== id),
    };
  },
  prevQuestion: (state) => {
    return {
      ...state,
      currentQuestion:
        state.currentQuestion > 0 ? state.currentQuestion - 1 : 0,
    };
  },
  nextQuestion: (state) => {
    const isLastQuestion = state.currentQuestion === state.questions.length - 1;
    return {
      ...state,
      currentQuestion: isLastQuestion
        ? state.currentQuestion
        : state.currentQuestion + 1,
      showResult: isLastQuestion,
    };
  },
  answerQuestion: (state, { answer }) => {
    const currentQuestion = state.questions[state.currentQuestion];
    const isCorrectAnswer = currentQuestion.correctAnswer === answer;

    const score = isCorrectAnswer ? state.score + 1 : state.score;

    const isLastQuestion = state.currentQuestion === state.questions.length - 1;

    const updatedQuestions = state.questions.map((question, index) => {
      if (index === state.currentQuestion) {
        return {
          ...question,
          selectedAnswer: answer,
        };
      }
      return question;
    });

    return {
      ...state,
      score,
      questions: updatedQuestions,
      currentQuestion: isLastQuestion
        ? state.currentQuestion
        : state.currentQuestion + 1,
      showResult: isLastQuestion,
    };
  },

  startQuiz: (state) => {
    return {
      ...state,
      quizzStarted: true,
      showResult: false,
      currentQuestion: 0,
      score: 0,
    };
  },
});

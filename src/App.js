import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";

function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];
  const [questionno, setquestionno] = useState(0);
  const [counter, setcounter] = useState(0);
  const [showscore, setshowscore] = useState(false);
  const handleChange = (correct) => {
    if (correct) {
      setcounter(counter + 1);
    }
    if (questionno < questions.length - 1) {
      setquestionno(questionno + 1);
    } else {
      setshowscore(true);
    }
  };
  const buttonHandle = () => {
    console.log("hello");
    setquestionno(0);
    setcounter(0);
    setshowscore(false);
  };
  return (
    <div class="container mt-5">
      {showscore ? (
        <div>
          <div> your score is {counter} of 4 </div>
          <button onClick={buttonHandle}>Reload</button>
        </div>
      ) : (
        <div class="d-flex justify-content-center row">
          <div class="col-md-10 col-lg-10">
            <div class="border">
              <div class="question bg-white p-3 border-bottom">
                <div class="d-flex flex-row justify-content-between align-items-center mcq">
                  <h4>MCQ Quiz</h4>
                  <span>{questionno + 1} of 4</span>
                </div>
              </div>
              <div class="question bg-white p-3 border-bottom">
                <div class="d-flex flex-row align-items-center question-title">
                  <h3 class="text-danger">Q.</h3>
                  <h5 class="mt-1 ml-2">
                    {questions[questionno].questionText}
                  </h5>
                </div>
                {questions[questionno].answerOptions.map((item) => {
                  return (
                    <div class="ans ml-2">
                      <label class="radio">
                        <button onClick={() => handleChange(item.isCorrect)}>
                          {item.answerText}
                        </button>
                      </label>
                    </div>
                  );
                })}
              </div>
              <div class="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                <button
                  class="btn btn-primary d-flex align-items-center btn-danger"
                  type="button"
                >
                  <i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous
                </button>
                <button
                  class="btn btn-primary border-success align-items-center btn-success"
                  type="button"
                >
                  Next<i class="fa fa-angle-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

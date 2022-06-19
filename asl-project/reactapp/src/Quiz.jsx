import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Quiz = () => {
  const [quiz, setQuiz] = useState({ Questions: [] });
  const params = useParams();
  useEffect(() => {
    async function fetchQuiz() {
			// get the quiz from the server
      const q = await axios(`http://localhost:3000/quizzes/${params.id}`, {
        headers: {
          token: localStorage.token,
        },
      });
      setQuiz(q.data);
    }
    fetchQuiz();
  }, [params.id]);

  return (
    <form id="quiz">
      <h1>{quiz.name} Quiz</h1>
      <ul>
        {quiz.Questions.map((q) => (
          <li key={q.id}>
            <h3>{q.questionText}</h3>
            <ul>
              <li key={q.Choices.id}>
                {q.Choices.map((c) => (
                  <div>
                    <input type="radio" name={"question_" + q.id} required />
                    <label>{c.choiceText}</label>
                  </div>
                ))}
              </li>
            </ul>
          </li>
        ))}
      </ul>
      <button><Link to={"/?token=" + localStorage.token}>Submit</Link></button>
    </form>
  );
};

export default Quiz;

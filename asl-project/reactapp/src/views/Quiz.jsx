import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Line from "../components/Line";
import Btn from "../components/Btn";

//styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 35%;
  height: 100%;
  & > h1 {
    text-align: center;
    margin-bottom: 1rem;
  }
  & > p {
    text-align: center;
  }
`;
const QuizForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 2rem 0;
  padding: 1rem;
`;
const QuizQuestions = styled.ul`
  padding: 0;
  & h2 {
    color: #388697;
  }
  & > li {
    border-left: 2px solid #388697;
    border-radius: 0.5rem;
    padding-left: 2rem;
    margin-bottom: 4rem;
  }
`;
const QuizChoices = styled.ul`
  & li {
    margin-bottom: 0.5rem;
  }
  & input[type="radio"] {
    height: 1.2rem;
    width: 1.2rem;
    margin-right: 1rem;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    border-radius: 50%;
    background: #fff;
    border: 3px solid #fff;
    &:checked {
      background: #2ea043;
      box-shadow: 0 0 0 2px #2ea043;
    }
  }
  & + label {
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    padding-bottom: 0.1rem;
  }
`;
const SubmitBtnDiv = styled.div`
  align-self: end;
`;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if the form passes validation
    const quiz = document.querySelector("#quiz"),
      isValid = quiz.checkValidity();
    if (isValid) {
      //redirect to the home page
      window.location.href = "/?token=" + localStorage.token;
    }
  };

  return (
    <Container>
      <h1>{quiz.name} Quiz</h1>
      <Line />
      <p>Each question requires an answer.</p>
      <QuizForm id="quiz" onSubmit={handleSubmit}>
        <QuizQuestions>
          {quiz.Questions.map((q) => (
            <li key={q.id} className="quizQuestion">
              <h2>{q.questionText}</h2>
              <p>Choose One</p>
              <QuizChoices>
                {q.Choices.map((c) => (
                  <li key={c.id} id={c.id}>
                    <div>
                      <input type="radio" name={"question_" + q.id} required />
                      <label>{c.choiceText}</label>
                    </div>
                  </li>
                ))}
              </QuizChoices>
            </li>
          ))}
        </QuizQuestions>

        <SubmitBtnDiv>
          <Btn label="Submit" />
        </SubmitBtnDiv>
      </QuizForm>
    </Container>
  );
};

export default Quiz;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Line from "../components/Line";
import LinkBtn from "../components/LinkBtn";

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
    & + label {
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;
      padding-bottom: .1rem;
    }
`;
const SubmitBtnDiv = styled.div`
  align-self: end;
`;
const Error = styled.p`
  color: red;
  font-size: 1.2rem;
  font-weight: bold;
  }
`;

const Quiz = () => {
  const [quiz, setQuiz] = useState({ Questions: [] });
  const [error, setError] = useState(false);

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

  const handleClick = (e) => {
    e.preventDefault();
    //check if all radios are checked
    const checked = document.querySelectorAll("input[type=radio]:checked");
    if (checked.length === quiz.Questions.length) {
      //redirect to the home page
      window.location.href = "/?token=" + localStorage.token;
    } else {
      setError(true);
    }
  };

  return (
    <Container>
      <h1>{quiz.name} Quiz</h1>
      <Line />
      <p>Each question requires an answer.</p>
      <QuizForm id="quiz">
        <QuizQuestions>
          {quiz.Questions.map((q) => (
            <li key={q.id} id={q.id}>
              <h2>{q.questionText}</h2>
              <p>Choose One</p>
              {error ? <Error>Please select an answer</Error> : null}
              <QuizChoices>
                {q.Choices.map((c) => (
                  <li key={c.id} id={c.id}>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name={"question_" + q.id}
                          required
                        />
                        {c.choiceText}
                      </label>
                    </div>
                  </li>
                ))}
              </QuizChoices>
            </li>
          ))}
        </QuizQuestions>
        <SubmitBtnDiv>
          <LinkBtn
            href={"/?token=" + localStorage.token}
            label="Submit"
            onClick={handleClick}
          />
        </SubmitBtnDiv>
      </QuizForm>
    </Container>
  );
};

export default Quiz;

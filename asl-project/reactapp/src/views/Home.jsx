import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Line from "../components/Line";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 35%;
  & > h1 {
    text-align: center;
    margin-bottom: 1rem;
  }
  & > p {
    text-align: center;
  }
`;
const QuizList = styled.ul`
  padding: 0;
`;
const QuizListItem = styled.li`
  background-color: #181c20;
  border-left: 2px solid #388697;
  border-radius: 0.5rem;
  box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.5);
  margin: 2rem 0;
  & h2 {
    margin: 0;
    color: #388697;
  }
  & a {
    display: block;
    color: #fff;
    text-decoration: none;
    height: 100%;
    width: 100%;
  }
  :hover {
    background-color: #2ea043;
    box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5);
    & h2 {
      color: #000;
    }
  }
`;
const QuizDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;
const Q = styled.div`
  padding: 0.5rem 1rem 0 1rem;
`;

const Home = () => {
  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
    async function fetchQuizes() {
      const response = await axios("http://localhost:3000/quizzes", {
        headers: {
          token: localStorage.token,
          accept: "application/json",
        },
      });
      setQuizzes(response.data);
    }
    fetchQuizes();
  }, []);


  return (
    <Container>
      <h1>Take a Quiz!</h1>
      <Line />
      <p>Click on any quiz listed below to take one.</p>
      <QuizList>
        {quizzes.map((q) => (
          <QuizListItem key={q.id}>
            <Link to={"/quiz/" + q.id}>
              <Q>
                <h2>{q.name}</h2>
                <QuizDetails>
                  <p>
                    <strong>Number of Questions:</strong> {q.Questions.length}
                  </p>

                  <p>
                    <strong>Weight:</strong> {q.weight}%
                  </p>
                </QuizDetails>
              </Q>
            </Link>
          </QuizListItem>
        ))}
      </QuizList>
    </Container>
  );
};

export default Home;

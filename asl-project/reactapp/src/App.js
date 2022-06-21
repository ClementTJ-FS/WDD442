import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import queryString from "query-string";
import Nav from "./Nav";
import Home from "./Home";
import Login from "./Login";
import Quiz from "./Quiz";
import Logout from "./Logout";
import styled from "styled-components";

//styled-components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #0d0f12;
  color: #fff;
`;
const App = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    // get token from url.
    const params = queryString.parse(window.location.search.replace(/^\?/, ""));
    //save token to local storage.
    localStorage.token = params.token;
    //check if token is in db.
    async function checkToken() {
      const response = await axios("http://localhost:3000/auth/token", {
        headers: {
          token: localStorage.token,
        },
      });
      //save token to state.
      setToken(response.data.token);
    }
    checkToken();
  }, []);

  if (!token) {
    return <Login />;
  } else {
    return (
      <>
        <AppContainer>
          <Nav isLoggedin={token ? true : false} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/quiz/:id" element={<Quiz />} />
            <Route
              exact
              path="/logout"
              element={<Logout setToken={setToken} />}
            />
          </Routes>
        </AppContainer>
      </>
    );
  }
};

export default App;

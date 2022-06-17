import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import queryString from "query-string";
import Nav from "./Nav";
import Home from "./Home";
import Login from "./Login";
import Quiz from "./Quiz";

const App = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    // get token from url.
    const params = queryString.parse(window.location.search.replace(/^\?/, ""));
    //save token.
    localStorage.token = params.token;
    //check if token is in db.
    async function checkToken() {
      const response = await axios("http://localhost:3000/auth/token", {
        headers: {
          token: localStorage.token,
        },
      });
      setToken(response.data.token);
    }
    checkToken();
  }, []);

  if (!token) {
    return <Login />;
  }
  return (
    <Router>
      <div className="App">
        <Nav isLoggedin={token ? true : false} />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/quizzes/:id" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

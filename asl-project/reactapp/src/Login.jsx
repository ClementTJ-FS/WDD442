import React from "react";
import Style from "style-it";

const Login = () => {
  return Style.it(
    `
      #container {
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         height: 100vh;
         width: 100vw;
         background-color: #f5f5f5;
         padding: 0;
      },
      #login-box {
         display: flex; 
         flex-direction: column;
         align-items: center;
         justify-content: center;
         width: 30rem;
         padding: 2rem;
         background-color: #fff;
         border-radius: 0.5rem;
         box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
      },

   `,
    <div id="container">
      <div id="login-box">
        <h1>Quiz Hub</h1>
        <h2>Login</h2>
        <hr />
        <a class="link" href="https://github.com/login/oauth/authorize?client_id=e3ebfea3a5e32f5169e1">
          Login with Github.
        </a>
      </div>
    </div>
  );
};

export default Login;

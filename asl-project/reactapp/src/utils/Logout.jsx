import { useEffect } from "react";
import axios from "axios";

const Logout = ({ setToken }) => {
  useEffect(() => {
    // send token to server to delete it
    async function clearToken() {
      await axios.get("http://localhost:3000/auth/logout", {
        headers: {
          token: localStorage.token,
        },
      });
      // clear localstorage, set token to null
      localStorage.clear();
      setToken("");
    }
    clearToken();

    // reload the page to clear the token from the URL
    window.location.href = "http://localhost:4000";
  }, [setToken]);
  return null;
};

export default Logout;

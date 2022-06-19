import { useEffect } from "react";
import axios from "axios";

const Logout = () => {
  useEffect(() => {
    // send token to server to delete it
    console.log(localStorage.token);
    async function clearToken() {
      await axios.get("http://localhost:3000/auth/logout", {
        headers: {
          token: localStorage.token,
        },
      });
    }
    clearToken();
    // Clear the token from localStorage.
    localStorage.removeItem("token");
    // reload the page to clear the token from the URL
    window.location.reload();
  }, []);
  return null
};

export default Logout;

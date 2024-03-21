import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import UserContext from "./context";

export default function Logout() {
  const ctx = useContext(UserContext);

  function handleLogout() {
    // Implement logout functionality
    // Clear user data from context or perform any necessary cleanup
    ctx.users = []; // Clear user data (This is just an example, adjust according to your actual context implementation)
  }

  return (
    <div>
      <h2>Logout Page</h2>
      <button onClick={handleLogout}>
        Logout
      </button>
      <Link to="/">Return to Login</Link> {/* Link to navigate to the login page */}
    </div>
  );
}

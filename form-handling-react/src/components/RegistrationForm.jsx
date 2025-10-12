import { useState } from "react";
import "../index.css";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("Please fill in all fields!");
      return;
    }

    console.log("Form submitted:", { username, email, password });
    alert("Registration successful!");

    // reset
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-container">
      <h2>User Registration (Controlled)</h2>
      <form onSubmit={handleSubmit} className="form-body">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="form-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;

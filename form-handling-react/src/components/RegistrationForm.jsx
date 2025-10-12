import { useState } from "react";
import "../index.css";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Username required
    if (!username.trim()) {
      newErrors.username = "Username is required";
    }

    // Email required + basic format check
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else {
      // Simple email regex (good for basic validation)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Enter a valid email address";
      }
    }

    // Password required + min length
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    // valid if no keys in newErrors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // If valid, do submission work (API call, state update, etc.)
    console.log("Form submitted:", { username, email, password });

    // Simple success feedback
    alert("Registration successful!");

    // Reset form and errors
    setUsername("");
    setEmail("");
    setPassword("");
    setErrors({});
  };

  return (
    <div className="form-container">
      <h2>User Registration (Controlled)</h2>
      <form onSubmit={handleSubmit} className="form-body" noValidate>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
            aria-invalid={!!errors.username}
            aria-describedby="username-error"
          />
          {errors.username && (
            <div id="username-error" className="error-message">
              {errors.username}
            </div>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && (
            <div id="email-error" className="error-message">
              {errors.email}
            </div>
          )}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            aria-invalid={!!errors.password}
            aria-describedby="password-error"
          />
          {errors.password && (
            <div id="password-error" className="error-message">
              {errors.password}
            </div>
          )}
        </div>

        <button type="submit" className="form-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;

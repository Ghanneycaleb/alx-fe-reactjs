import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";

import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProfileDetails from "./pages/ProfileDetails";
import ProfileSettings from "./pages/ProfileSettings";
import BlogPost from "./pages/BlogPost";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* Nested Routes */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic Route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* 404 Fallback */}
        <Route
          path="*"
          element={
            <h2 style={{ textAlign: "center", marginTop: "3rem" }}>
              404 - Page Not Found
            </h2>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

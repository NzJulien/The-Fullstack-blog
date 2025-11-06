import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from "./pages/login.jsx";
import Register from "./pages/register";
import NotFound from "./pages/NotFound";
import HomePage from "./components/HomePage.jsx";
import About from "./components/about.jsx";
import Community from "./components/community.jsx";
import Projects from "./components/projects.jsx";
import ProtectedRoute from "./components/ProtectedRoute";

function Logout() {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/home" element={<HomePage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/community" element={<Community />}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

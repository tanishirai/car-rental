import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { auth } from "../Auth/Firebase.js";
import { signOut } from "firebase/auth";
import useAuthStore from "../../store/store.js";

const Navbar = () => {
  const { user, setUser, logout } = useAuthStore(); // Access user from Zustand store
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Listen to auth state changes and update Zustand store
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); // Set user to Zustand store
      } else {
        logout(); // Clear user from Zustand store
      }
    });
    return () => unsubscribe(); // Cleanup listener on component unmount
  }, [setUser, logout]);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully");
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="brand-container">
        <Link className="navbar-brand" to="/">
          car <span>rental</span>
        </Link>
      </div>

      <div className="burger" id="burger" onClick={handleClick}>
        <span className={`burger-line ${isVisible ? "active" : ""}`}></span>
        <span className={`burger-line ${isVisible ? "active" : ""}`}></span>
        <span className={`burger-line ${isVisible ? "active" : ""}`}></span>
      </div>

      <div
        className={`link-container ${
          isVisible ? "link-container-active" : "link-container-hidden"
        }`}
      >
        <Link className="nav-link active" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/models">
          Models
        </Link>
        <Link className="nav-link" to="/testimonials">
          Testimonials
        </Link>
        <Link className="nav-link" to="/team">
          Our team
        </Link>
        <Link className="nav-link" to="/contact">
          Contact us
        </Link>
        <div className="auth-container">
          {user ? (
            <button className="log-out" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link className="sign-up" to="/register">
                Sign up
              </Link>
              <Link className="log-in" to="/login">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

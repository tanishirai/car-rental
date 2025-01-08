import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./Firebase.js";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/store.js";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        navigate("/booking");
      } else {
        console.log("User is not logged in");
      }
    });
    return () => unsubscribe();
  }, [navigate, setUser]);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      alert("Signed in with Google successfully!");
    } catch (error) {
      console.error("Google sign-in error:", error);
      setError(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      setUser(userCredential.user);
      alert("Registration successful!");
    } catch (error) {
      console.error("Registration error:", error);
      setError(error.message);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-88px)] flex items-center justify-center bg-orange-50">
      <div className="w-full max-w-5xl flex shadow-2xl rounded-xl overflow-hidden bg-white h-[640px] mx-4">
        {/* Left Section: Image */}
        <div className="hidden md:flex w-1/2">
          <img
            src="https://images.unsplash.com/photo-1572122052368-b880d6c9d313?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Orange tech theme"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Section: Form */}
        <div className="w-full md:w-1/2 p-4 md:p-12 flex flex-col justify-center gap-6">
          <h1 className="text-3xl font-bold text-center text-orange-600">Create an Account</h1>
          <p className="text-sm text-center text-gray-600">
            Please register to get started
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              value={formData.email}
              placeholder="Enter email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            <input
              type="password"
              value={formData.password}
              placeholder="Enter password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            <input
              type="password"
              value={formData.confirmPassword}
              placeholder="Confirm password"
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full px-4 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
            >
              Register
            </button>
          </form>

          <p className="text-gray-500 text-center text-sm">OR</p>

          <button
            onClick={handleGoogleSignIn}
            className="w-full px-4 py-3 bg-orange-100 text-orange-600 font-semibold rounded-lg hover:bg-orange-200 transition"
          >
            Sign in with Google
          </button>

          <p className="text-gray-500 text-center text-sm">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-orange-500 font-semibold hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

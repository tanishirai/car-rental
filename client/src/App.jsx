import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Models from "./pages/Models";
import Testimonials from "./pages/Testimonials";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Errorpage from "./pages/Errorpage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import LearnMore from "./pages/LearnMore";
import Booking from "./components/Booking/Booking";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { MainLayout } from "./layout/MainLayout";
import { AuthLayout } from "./layout/AuthLayout";

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        {/* Auth routes without Navbar and Footer */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Main routes with Navbar and Footer */}
        <Route element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/models" element={<Models />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learnmore" element={<LearnMore />} />
          <Route path="*" element={<Errorpage />} />
          <Route
            path="/booking"
            element={
              <ProtectedRoute>
                <Booking />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;

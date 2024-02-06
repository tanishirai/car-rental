import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Models from "./Pages/Models";
import Testimonials from "./Pages/Testimonials";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <BrowserRouter>
  <Navbar />
    <Routes>
    <Route index path="/" element={<Home/>}/>
    <Route  path="/about" element={<About/>}/>
    <Route  path="/models" element={<Models/>}/>
    <Route  path="/testimonials" element={<Testimonials/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

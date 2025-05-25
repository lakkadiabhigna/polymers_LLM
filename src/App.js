// // src/App.js
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import PredictPage from "./pages/PredictPage";
// import HomePage from "./pages/HomePage";
// import Navbar from "./pages/Navbar";
// import './App.css';
// import Footer from "./pages/Footer";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/predict" element={<PredictPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PredictPage from "./pages/PredictPage";
import HomePage from "./pages/HomePage";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import AboutPage from "./pages/AboutPage"; 
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/predict" element={<PredictPage />} />
            <Route path="/about-tg" element={<AboutPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

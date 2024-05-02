import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContentPage from "./components/ContentPage";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {
  return (
    <Router className="app-background">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/lesson/:section/:title" element={<ContentPage />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

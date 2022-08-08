import { FC } from "react";
import "./assets/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import AnimeDetail from "./page/AnimeDetail";

const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <Searchbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime/:id/:slug" element={<AnimeDetail />} />
          <Route path="/collection" />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

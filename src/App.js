import "./App.css";

import Profile from "./Pages/Index";
import NotFound from "./Pages/NotFound";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Menu from "./Pages/Menu";
import Landscapes from "./Pages/Landscapes";
import Portraits from "./Pages/Portraits";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Profile />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/code" element={<Profile />} />
        <Route exact path="/landscapes" element={<Landscapes />} />
        <Route exact path="/photography/landscapes" element={<Landscapes />} />
        <Route exact path="/photography/portraits" element={<Portraits />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

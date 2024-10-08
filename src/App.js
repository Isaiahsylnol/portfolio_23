import "./App.css";

import Profile from "./Pages/index";
import NotFound from "./Pages/NotFound";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
// https://isaiahsylnol.github.io/isaiah_s_23_portfolio/

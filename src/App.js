import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Home";
import About from "./pages/About";
import Report from "./pages/Report";
import Donate from "./pages/Donate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/report" element={<Report />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

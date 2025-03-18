import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Haunted from "./pages/Haunted";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/haunted" element={<Haunted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

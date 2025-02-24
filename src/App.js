import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Haunted from "./Haunted";

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

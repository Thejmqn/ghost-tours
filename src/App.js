import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" />Now 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

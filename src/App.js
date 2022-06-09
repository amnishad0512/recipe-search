import "./App.css";
import SearchPage from "./components/SearchPage";
import DetailPage from "./components/DetailPage";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/:title" element={<DetailPage />} />
    </Routes>
  );
}

export default App;

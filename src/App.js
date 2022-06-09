import SearchPage from "./components/SearchPage";
import DetailPage from "./components/DetailPage";
import { Routes, Route} from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/:title" element={<DetailPage />} />
    </Routes>
  );
}

export default App;

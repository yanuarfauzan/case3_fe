import Favorite from "./components/Favorit";
import Home from "./components/Home";
import Menu from "./components/Menu";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/fav" element={<Favorite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

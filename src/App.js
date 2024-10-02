import Favorite from "./components/Favorit";
import Home from "./components/Home";
import Menu from "./components/Menu";
import "./index.css";
import "flowbite";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/auth/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/fav" element={<Favorite />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

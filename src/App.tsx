import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hamburgers from "./pages/Hamburgers/Hamburgers";
import Login from "./pages/Login/Login";
import Sobremesas from "./pages/Sobremesas/Sobremesas";
import Combos from "./pages/Combos/Combos";
import Bebidas from "./pages/Bebidas/Bebidas";
import Entradas from "./pages/Entradinhas/Entradas";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hamburgers" element={<Hamburgers />} />
        <Route path="/Login" element = {<Login/>}/>
        <Route path="/Entradas" element={<Entradas/>}/>
        <Route path="/Sobremesas" element={<Sobremesas/>}/>
        <Route path= "/Combos" element={<Combos/>}/>
        <Route path= "/Bebidas" element={<Bebidas/>}/>
      </Routes>
    </BrowserRouter>
  );
}

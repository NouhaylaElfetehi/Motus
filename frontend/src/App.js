import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        {/* Utilisation du groupe de routes pour inclure Navbar sur toutes les routes de /dashboard */}
        <Route path='/*' element={<Navbar />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;

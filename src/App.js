import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Notfound from "./pages/NotFound/Notfound";
import Dashboard from "./pages/Dashboard/Dashboard";
import Nav from "./pages/Shared/Nav";
import Parchase from "./pages/Perchase/Parchase";
import Blog from "./pages/Blog/Blog";
import MyPortFolio from "./pages/MyPortfolio/MyPortFolio";

function App() {
  return (
    <div className="container mx-auto">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/purchase" element={<Parchase />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/portfolio" element={<MyPortFolio />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/*" element={<Notfound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

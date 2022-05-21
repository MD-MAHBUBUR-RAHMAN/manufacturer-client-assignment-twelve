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
import MyOrder from "./pages/Dashboard/MyOrder";
import MyPortFolio from "./pages/MyPortfolio/MyPortFolio";
import AddReview from "./pages/Dashboard/AddReview";
import MyProfile from "./pages/Dashboard/MyProfile";
import ManageAllOrder from "./pages/Dashboard/ManageAllOrder";
import AddProduct from "./pages/Dashboard/AddProduct";
import MakeAdmin from "./pages/Dashboard/MakeAdmin";
import ManageProduct from "./pages/Dashboard/ManageProduct";

function App() {
  return (
    <div className="container mx-auto">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/purchase" element={<Parchase />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/portfolio" element={<MyPortFolio />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MyOrder />} />
          <Route path="addreview" element={<AddReview />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="manageorder" element={<ManageAllOrder />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="makeadmin" element={<MakeAdmin />} />
          <Route path="manageproduct" element={<ManageProduct />} />
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/*" element={<Notfound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

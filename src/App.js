import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import AddItems from "./components/AddItems/AddItems";
import AllItems from "./components/AllItems/AllItems";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ManageItems from "./components/ManageItems/ManageItems";
import ManageStock from "./components/ManageStock/ManageStock";
import MyItems from "./components/MyItems/MyItems";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/allProducts"
          element={
            <RequireAuth>
              <AllItems></AllItems>
            </RequireAuth>
          }
        ></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route
          path="/manageItems"
          element={
            <RequireAuth>
              <ManageItems></ManageItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addItems"
          element={
            <RequireAuth>
              <AddItems></AddItems>
            </RequireAuth>
          }
        ></Route>
        <Route path="/myItems" element={<MyItems></MyItems>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/allItems" element={<AllItems></AllItems>}></Route>
        <Route
          path="/manageStock/:productId"
          element={
            <RequireAuth>
              <ManageStock></ManageStock>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

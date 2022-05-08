import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllItems from "./components/AllItems/AllItems";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ManageStock from "./components/ManageStock/ManageStock";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/allItems" element={<AllItems></AllItems>}></Route>
        <Route path="/manageStock/:productId" element={<ManageStock></ManageStock>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

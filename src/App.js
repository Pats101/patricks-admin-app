import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import UserList from "./components/user-list/UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/new-user/NewUser";
import ProductList from "./pages/product-list/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/new-product/NewProduct";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/patricks-admin-app/" element={<Home />} />
          <Route path="/patricks-admin-app/users" element={<UserList />} />
          <Route path="/patricks-admin-app/user/:userId" element={<User />} />
          <Route path="/patricks-admin-app/newUser" element={<NewUser />} />
          <Route path="/patricks-admin-app/products" element={<ProductList />} />
          <Route path="/patricks-admin-app/product/:productId" element={<Product />} />
          <Route path="/patricks-admin-app/newProduct" element={<NewProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

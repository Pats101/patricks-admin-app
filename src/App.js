import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import UserList from "./components/user-list/UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/user/User";

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import { Firms } from "../pages/Firms";
import { Purchases } from "../pages/Purchases";
import { Sales } from "../pages/Sales";
import { Brands } from "../pages/Brands";
import { Products } from "../pages/Products";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            <Route path="purchases" element={<Purchases/>} />
            <Route path="sales" element={<Sales/>} />
            <Route path="brands" element={<Brands/>} />
            <Route path="firms" element={<Firms/>} />
            <Route path="products" element={<Products/>} />

          </Route>
         
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

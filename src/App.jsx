import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Dashboard from "./pages/admin/dashboard/Dashboard";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import NoPage from "./pages/nopage/NoPage";
import Order from "./pages/order/Order";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;

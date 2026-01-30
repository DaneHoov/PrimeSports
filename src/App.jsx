// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Join from "./pages/Join.jsx";
import Loyalty from "./pages/Loyalty.jsx";
import EmailSignup from "./pages/EmailSignup.jsx";
import Menu from "./pages/Menu.jsx";
import Cart from "./pages/Cart.jsx";
import Order from "./pages/Order.jsx";
import SignIn from "./pages/SignIn.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Join />} />
          <Route path="/loyalty" element={<Loyalty />} />
          <Route path="/email-signup" element={<EmailSignup />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </main>
    </div>
  );
}

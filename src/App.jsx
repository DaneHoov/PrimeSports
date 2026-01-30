import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

function Page({ title }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-bold">Tailwind is live</h1>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page title="Home" />} />
        <Route path="/contact" element={<Page title="Contact Us" />} />
        <Route path="/join" element={<Page title="Join Our Team" />} />
        <Route path="/loyalty" element={<Page title="Loyalty Sign Up" />} />
        <Route path="/email-signup" element={<Page title="Email Marketing Sign Up" />} />
        <Route path="/menu" element={<Page title="Menu" />} />
        <Route path="/cart" element={<Page title="Cart" />} />
        <Route path="/order" element={<Page title="Order Online" />} />
        <Route path="/signin" element={<Page title="Sign In" />} />
      </Routes>
    </>
  );
}

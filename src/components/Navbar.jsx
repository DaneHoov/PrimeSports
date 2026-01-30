import { NavLink, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const baseLink =
  "px-3 py-2 text-[15px] font-medium text-gray-800 hover:text-black hover:bg-gray-100 rounded-lg transition";
const activeLink = "text-black bg-gray-100";

export default function Navbar() {
  const [openMore, setOpenMore] = useState(false);
  const moreRef = useRef(null);

  // Close dropdown on outside click / ESC
  useEffect(() => {
    function onDown(e) {
      if (!moreRef.current) return;
      if (!moreRef.current.contains(e.target)) setOpenMore(false);
    }
    function onEsc(e) {
      if (e.key === "Escape") setOpenMore(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-16 flex items-center justify-between gap-3">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="h-9 w-9 rounded-xl bg-black text-white grid place-items-center font-bold">
              P
            </div>
            <span className="text-lg font-semibold text-gray-900">
              PrimeSports
            </span>
          </Link>

          {/* Center: Nav links */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : ""}`
              }
            >
              Contact Us
            </NavLink>

            <NavLink
              to="/join"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : ""}`
              }
            >
              Join Our Team
            </NavLink>

            <NavLink
              to="/loyalty"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : ""}`
              }
            >
              Loyalty Sign Up
            </NavLink>

            {/* More dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                type="button"
                onClick={() => setOpenMore((v) => !v)}
                className={`${baseLink} flex items-center gap-1`}
                aria-haspopup="menu"
                aria-expanded={openMore}
              >
                More
                <span className="text-xs">▾</span>
              </button>

              {openMore && (
                <div
                  role="menu"
                  className="absolute left-0 mt-2 w-56 rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden"
                >
                  <NavLink
                    to="/email-signup"
                    className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-50"
                    role="menuitem"
                    onClick={() => setOpenMore(false)}
                  >
                    Email Marketing Sign Up
                  </NavLink>
                  <NavLink
                    to="/menu"
                    className="block px-4 py-3 text-sm text-gray-800 hover:bg-gray-50"
                    role="menuitem"
                    onClick={() => setOpenMore(false)}
                  >
                    Menu
                  </NavLink>
                </div>
              )}
            </div>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Cart */}
            <Link
              to="/cart"
              className="h-10 w-10 grid place-items-center rounded-lg hover:bg-gray-100 transition"
              aria-label="Cart"
              title="Cart"
            >
              🛒
            </Link>

            {/* Order Online */}
            <Link
              to="/order"
              className="hidden sm:inline-flex items-center justify-center h-10 px-4 rounded-lg bg-black text-white font-semibold hover:opacity-90 transition"
            >
              Order Online
            </Link>

            {/* Sign In */}
            <Link
              to="/signin"
              className="inline-flex items-center justify-center h-10 px-4 rounded-lg border border-gray-300 text-gray-900 font-semibold hover:bg-gray-100 transition"
            >
              Sign In
            </Link>

            {/* Mobile Menu button */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="h-10 w-10 grid place-items-center rounded-lg hover:bg-gray-100 transition"
        aria-label="Open menu"
      >
        ☰
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-16 bg-white border-b border-gray-200 shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col">
            <NavLink className="py-2" to="/contact" onClick={() => setOpen(false)}>
              Contact Us
            </NavLink>
            <NavLink className="py-2" to="/join" onClick={() => setOpen(false)}>
              Join Our Team
            </NavLink>
            <NavLink className="py-2" to="/loyalty" onClick={() => setOpen(false)}>
              Loyalty Sign Up
            </NavLink>
            <NavLink className="py-2" to="/email-signup" onClick={() => setOpen(false)}>
              Email Marketing Sign Up
            </NavLink>
            <NavLink className="py-2" to="/menu" onClick={() => setOpen(false)}>
              Menu
            </NavLink>

            <div className="mt-2 flex gap-2">
              <NavLink
                to="/order"
                className="flex-1 h-10 grid place-items-center rounded-lg bg-black text-white font-semibold"
                onClick={() => setOpen(false)}
              >
                Order Online
              </NavLink>
              <NavLink
                to="/signin"
                className="flex-1 h-10 grid place-items-center rounded-lg border border-gray-300 font-semibold"
                onClick={() => setOpen(false)}
              >
                Sign In
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

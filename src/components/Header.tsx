import { NavLink } from "react-router-dom";
import logo from "../assets/allsorts-logo.png";
import { useState } from "react";
import { useCart } from "../hooks/useCart";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-neutral-soft shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <NavLink to="/">
          <img src={logo} alt="Allsorts" className="h-10 w-auto" />
        </NavLink>
        <div className="flex items-center gap-5 md:hidden">
          <NavLink
            to="/cart"
            aria-label={`Shopping cart, ${cartCount} items`}
            className="relative inline-flex items-center text-dark hover:text-berry"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 7h12l1 14H5L6 7Z" />
              <path d="M9 9V6a3 3 0 0 1 6 0v3" />
            </svg>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 flex min-w-5 items-center justify-center rounded-full bg-berry px-1 text-xs text-white">
                {cartCount}
              </span>
            )}
          </NavLink>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="cursor-pointer text-2xl text-dark md:hidden"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-3 text-sm sm:gap-8 sm:text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-berry underline decoration-berry decoration-2 underline-offset-6"
                : "text-dark transition hover:text-berry/80"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-berry underline decoration-berry decoration-2 underline-offset-6"
                : "text-dark transition hover:text-berry/80"
            }
          >
            Cart ({cartCount})
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-berry underline decoration-berry decoration-2 underline-offset-6"
                : "text-dark transition hover:text-berry/80"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="flex flex-col gap-4 bg-neutral-soft px-6 py-4 md:hidden"
        >
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-berry underline decoration-berry decoration-2 underline-offset-6"
                : "text-dark transition hover:text-berry/80"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-berry underline decoration-berry decoration-2 underline-offset-6"
                : "text-dark transition hover:text-berry/80"
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-berry underline decoration-berry decoration-2 underline-offset-6"
                : "text-dark transition hover:text-berry/80"
            }
          >
            Contact
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;

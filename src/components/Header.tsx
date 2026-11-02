import { NavLink } from "react-router-dom";
import logo from "../assets/allsorts-logo.png";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-soft shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <NavLink to="/">
          <img src={logo} alt="Allsorts" className="h-10 w-auto" />
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
            Cart
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

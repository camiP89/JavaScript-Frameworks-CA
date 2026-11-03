import { NavLink } from "react-router-dom";
import logo from "../assets/allsorts-logo.png";

function Footer() {
  return (
    <footer className="border-t-2 border-caramel bg-neutral-soft shadow-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-6">
        <NavLink to="/">
          <img src={logo} alt="Allsorts" className="h-6 w-auto" />
        </NavLink>

        <nav
          aria-label="Footer navigation"
          className="mt-4 flex flex-wrap justify-center gap-6"
        >
          <NavLink
            to="/"
            end
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

        <p className="mt-4 text-sm text-dark">
          &copy; {new Date().getFullYear()} Allsorts
        </p>
      </div>
    </footer>
  );
}

export default Footer;

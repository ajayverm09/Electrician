import { Link, useLocation } from "react-router-dom";
import { MdPhone, MdElectricBolt, MdBolt, MdMenu, MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import GetInTouchForm from "./GetInForm";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "BLOG", path: "/blog" },
  { name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const [opened, setOpened] = useState(false); // Modal open state
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-black shadow-md text-[#FFD700]" : "bg-black/30 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            <div className="flex items-center gap-2">
              <MdBolt
                className={`transition-all duration-300 ${
                  scrolled ? "text-[#FFD700] text-3xl" : "text-white text-4xl"
                }`}
              />
              <span
                className={`font-extrabold tracking-wide ${
                  scrolled ? "text-[#FFD700] text-lg" : "text-white text-xl"
                }`}
              >
                POWERFIX ELECTRICALS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.path}
                className={`hover:text-[#FFD700] transition ${
                  pathname === link.path
                    ? "text-[#FFD700] underline"
                    : scrolled
                    ? "text-[#FFD700]"
                    : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:1234567890" className="flex items-center gap-2 text-sm">
              <MdElectricBolt className="text-lg" />
              <span className={scrolled ? "text-[#FFD700]" : "text-white"}>
                800 555 284
              </span>
            </a>
            <button
              onClick={() => setOpened(true)}
              className="bg-[#FFD700] cursor-pointer hover:shadow-lg hover:scale-105 text-black px-4 py-2 rounded-md font-semibold text-sm transition"
            >
              BOOK ELECTRICIAN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/95 text-white px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 ${
                  pathname === link.path
                    ? "text-[#FFD700] underline"
                    : "hover:text-[#FFD700]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:1234567890"
              className="flex items-center gap-2 text-sm py-2"
            >
              <MdPhone />
              800 555 284
            </a>
            <button
              onClick={() => {
                setOpened(true);
                setMenuOpen(false);
              }}
              className="w-full bg-[#FFD700] text-black py-2 rounded-md font-semibold"
            >
              BOOK ELECTRICIAN
            </button>
          </div>
        )}
      </header>

      {/* Modal */}
      {opened && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-black text-white p-6 rounded-md shadow-lg w-full max-w-md relative border-2 border-[#FFD700]">
            <button
              onClick={() => setOpened(false)}
              className="absolute top-2 right-2 text-[#FFD700] hover:text-white text-xl font-bold"
            >
              ×
            </button>
            <GetInTouchForm />
          </div>
        </div>
      )}
    </>
  );
}

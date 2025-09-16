import { Link, useLocation } from "react-router-dom";
import { MdPhone, MdElectricBolt } from "react-icons/md";
import { useEffect, useState } from "react";
import GetInTouchForm from "./GetInForm";
import {MdBolt } from "react-icons/md";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "BLOG", path: "/blog" },
  { name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const [opened, setOpened] = useState(false); // Form modal open state
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-[98%] transition-all duration-300 ${
          scrolled
            ? "bg-black shadow-md text-[#FFD700] w-full"
            : "bg-black/20 mx-[1%] my-[2%] text-white"
        }`}
      >
        <div
          className={`max-w-[1200px] mx-[3%] flex items-center justify-between rounded-md backdrop-blur-md px-6 transition-all duration-300 ${
            scrolled ? "h-14" : ""
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
          {/* Navigation */}
          <nav className="flex gap-4 w-1/3 justify-center items-center text-sm font-medium">
            {navLinks.map((link, idx) => (
              <div key={link.name} className="flex items-center gap-2">
                <Link
                  to={link.path}
                  className={`hover:text-[#FFD700] ${
                    pathname === link.path
                      ? "text-[#FFD700] underline"
                      : scrolled
                      ? "text-[#FFD700]"
                      : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
                {idx < navLinks.length - 1 && (
                  <span
                    className={`${
                      scrolled ? "text-gray-400" : "text-gray-200"
                    }`}
                  >
                    /
                  </span>
                )}
              </div>
            ))}
          </nav>

          {/* Call & Button */}
          <div className="w-1/3 flex items-center justify-end gap-6">
            <a href="tel:1234567890">
              <span
                className={`text-sm flex items-center gap-2 ${
                  scrolled ? "text-[#FFD700]" : "text-white"
                }`}
              >
                <MdElectricBolt className="text-lg" />
                <span className={scrolled ? "text-[#FFD700]" : "text-white"}>
                  800 555 284
                </span>
              </span>
            </a>
            <button
              onClick={() => setOpened(true)}
              className="bg-[#FFD700] cursor-pointer hover:shadow-lg hover:scale-105 text-black px-4 py-2 rounded-md font-semibold text-sm transition"
            >
              BOOK ELECTRICIAN
            </button>
          </div>
        </div>
      </header>

      {/* Modal for Get in Touch */}
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

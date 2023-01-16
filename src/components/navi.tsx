import { useState, useRef } from "react";
import { HamburgIcon, LogoIcon, MoonIcon } from "./assets/icons";
// import { FaBars, FaTimes } from "react-icons/fa"
import Link from "next/link";

export default function Navigation() {
  const [mobileMenu, setmobileMenu] = useState(false);

  return (
    <div className="navi-container">
      <div className="navi-logo">
        <div className="brand-logo">
          <LogoIcon />
        </div>
        <div className="brand-name">
          <ul className="name-list">
            <li className="name-1">
              <Link href="/">N</Link>
            </li>
            <li className="name-2">
              <Link href="/">e</Link>
            </li>
            <li className="name-3">
              <Link href="/">o</Link>
            </li>
            <li className="name-4">
              <Link href="/">d</Link>
            </li>
            <li className="name-5">
              <Link href="/">a</Link>
            </li>
            <li className="name-6">
              <Link href="/">i</Link>
            </li>
            <li className="name-7">
              <Link href="/">n</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navi-menu" id={mobileMenu ? "mobile-menu" : ""}>
        <ul className="menu-list">
          <li className="Trend">
            <Link href="/">MEMU_1</Link>
          </li>
          <li className="Language">
            <Link href="/posts/sqream">MEMU_2</Link>
          </li>
          <li className="Gallery">
            <Link href="/posts/swr">MEMU_3</Link>
          </li>
          <li className="Life">
            <Link href="/posts/reduce">MEMU_4</Link>
          </li>
          <li className="About">
            <Link href="/posts/sqream">MEMU_5</Link>
          </li>
        </ul>
      </div>
      <button
        className="navi-btn"
        onClick={() => {
          setmobileMenu(!mobileMenu);
        }}
      >
        <HamburgIcon />
      </button>
    </div>
  );
}

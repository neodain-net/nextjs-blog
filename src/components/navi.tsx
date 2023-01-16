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
          <li className="life">
            <Link href="/">Life</Link>
          </li>
          <li className="trend">
            <Link href="/posts/sqream">Trend</Link>
          </li>
          <li className="gallery">
            <Link href="/posts/swr">Gallery</Link>
          </li>
          <li className="language">
            <Link href="/posts/reduce">Language</Link>
          </li>
          <li className="contact">
            <Link href="/posts/sqream">Contact</Link>
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

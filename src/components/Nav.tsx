import { useState, useRef, useEffect } from "react";
import { HamburgIcon, LogoIcon, MoonIcon } from "@/src/components/assets/icons";
// import { FaBars, FaTimes } from "react-icons/fa"
import Link from "next/link";
import * as data from "./menu.json";

const linksString = JSON.stringify(data);
const items = JSON.parse(linksString).items;

interface Items {
  title: string;
  link: string;
  subItems?: Array<Items>;
}

// interface Props {
//   items: Array<Items>;
// }

export default function Nav() {
  const [mobileMenu, setmobileMenu] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const mediaSize = 950;

  const handleClick = (index: number) => {
    console.log(`openIndex : ${openIndex}, index=${index}`);
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  // This function will be triggered when the mouse pointer is over the box
  // const boxMouseOverHandler = (event: React.MouseEvent<HTMLDivElement>) => {
  //   const box: HTMLDivElement = event.currentTarget;
  //   box.style.backgroundColor = "lightblue";
  // };

  return (
    <div className="navi-container">
      <div className="navi-logo">
        <div className="brand-logo">
          <LogoIcon />
        </div>
        <div className="brand-name">
          <Link href="/">
            <img className="logo-img" src="images/neodain_04.png" alt="" />
          </Link>
        </div>
      </div>

      <div className={mobileMenu ? "mobile-menu" : "navi-menu"}>
        <ul className="menu-list">
          {items.map((item: Items, index: number) => {
            return (
              <li key={item.title} className="menu-item sub-item">
                <a
                  href={item.subItems ? "#" : "/posts/service_c++"}
                  onClick={() => handleClick(index)}
                >
                  {item.title}
                  {item.subItems && <i className="plus"></i>}
                </a>
                {item.subItems && (
                  <ul className="sub-menu">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.title} className="menu-item">
                        <a
                          href={subItem.subItems ? "#" : "/posts/nodejs"}
                          onClick={() => handleClick(index)}
                        >
                          {subItem.title}
                          {subItem.subItems && <i className="plus"></i>}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
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

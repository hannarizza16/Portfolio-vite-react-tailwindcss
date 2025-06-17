
import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

import styles from "./Navbar.module.css"; 
import { getImageUrl } from "../../utils/utils.js";

const navbarItems = [
  {
    label: "Home",
    href: "/home",
    icon: <AiOutlineHome className={styles.icon} />,

  },
  {
    label: "About",
    href: "/about",
    icon: <AiOutlineUser className={styles.icon} />,
  },
  // {
  //   label: "Resume",
  //   href: "/resume",
  //   icon: <CgFileDocument className={styles.icon} />,
  // },
  {
    label: "Projects",
    href: "/projects",
    icon: <AiOutlineFundProjectionScreen className={styles.icon} />,
  },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        hanna.xvi
      </a>
      <div className={styles.menu}>
        <img className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
{/* NAVBAR ITEM */}
          {navbarItems.map((item, index) => (
            <li key={index} className={styles.navbarItem}>
              <a href={item.href}>
                {item.icon}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

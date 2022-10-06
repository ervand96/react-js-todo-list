import { useEffect, useRef, useState } from "react";
import { navbar, navBarPath, NavbarProps } from "../../../constants/navbar";
import HamburgerMenu from "../hamburger-menu";
import { Link } from "react-router-dom";

import styles from "./navbar.module.scss";

const local = JSON.parse(localStorage.getItem("active")!) || "";

export default function Navbar(): JSX.Element {
  const [isActive, setIsActive] = useState<Object>(local);
  const [activeHamburger, setActiveHamburger] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("active", JSON.stringify(isActive));
  }, [isActive]);

  const openHamburger = (): void => {
    setActiveHamburger(!activeHamburger);
  };

  useEffect(() => {
    const clickedOutside = (e: MouseEvent): void => {
      if (
        !activeHamburger &&
        ref.current &&
        !ref.current.contains(e.target as HTMLElement)
      ) {
        setActiveHamburger(!activeHamburger);
      }
    };

    document.addEventListener("mousedown", clickedOutside);

    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    };
  }, [activeHamburger]);

  return (
    <div className={styles.container} ref={ref}>
      <nav className={styles.navbar}>
        <div className={styles.hamburgerMenuBox} onClick={openHamburger}>
          <HamburgerMenu active={activeHamburger} />
        </div>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <Link to="/" onClick={() => setIsActive(navBarPath.HOME)}>
              ReactJs
            </Link>
          </div>
          <ul
            className={`${!activeHamburger && styles.openHeaderNavbar} ${styles.navLinks
              }`}
          >
            <div className={styles.menu}>
              {navbar?.map((item: NavbarProps, index: number) => (
                <li
                  onClick={() => setIsActive(item.path)}
                  key={index}
                  className={
                    isActive === item.path ? styles.active : styles.menu
                  }
                >
                  <Link to={item?.path}>{item?.title} </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

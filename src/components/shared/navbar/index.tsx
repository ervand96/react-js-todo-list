import { navbar, NavbarProps } from "../../../constants/navbar";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

export default function Navbar(): JSX.Element {
  const pathName = window.location.pathname;

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/">ReactJs</Link>
        </div>
        <ul className={styles.navLinks}>
          <div className={styles.menu}>
            {navbar?.map((item: NavbarProps, index: number) => (
              <li
                key={index}
                className={pathName === item.path ? styles.active : ""}
              >
                <Link to={item?.path}>{item?.title}</Link>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </div>
  );
}

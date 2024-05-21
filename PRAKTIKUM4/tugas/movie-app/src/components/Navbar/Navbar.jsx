import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <h2 className={styles.navbar__brand}>Movie App</h2>
                </div>
                <ul className={styles.navbar__list}>
                    <li className={styles.navbar__item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link to="/movies/create">Add Movie</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link to="/movie/popular">Popular</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link to="/movie/now">Now Playing</Link>
                    </li>
                    <li className={styles.navbar__item}>
                        <Link to="/movie/top">Top Rated</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
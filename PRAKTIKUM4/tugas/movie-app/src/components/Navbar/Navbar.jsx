import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <h2 className={styles.navbar__brand}>Movie App</h2>
                </div>
                <ul className={styles.navbar__list}>
                    <li className={styles.navbar__item}>Home</li>
                    <li className={styles.navbar__item}>About</li>
                    <li className={styles.navbar__item}>Profile</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
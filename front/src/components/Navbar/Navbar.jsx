import { Link } from 'react-router-dom';
import logoRM from '../../assets/logoRM.svg';
import SearchBar from '../SearchBar';
import styles from './navbar.module.scss';

function Navbar({ onSearch, logout }) {
  return (
    <div className={styles.navContainer}>
      {/* DIV DE LOGO */}
      <div className={styles.logo}>
        <img src={logoRM} alt='logoRM' width='300px' height='150px' />
      </div>
      {/* DIV SEARCH Y NAVIGATION */}
      <div className={styles.secondSection}>
        <div className={styles.wrappedItems}>
          <Link to='/home' className={styles.linknav}>
            <span className={styles.itemnav}>Home</span>
          </Link>
          <Link to='/about' className={styles.linknav}>
            <span className={styles.itemnav}>About</span>
          </Link>
          <span onClick={logout} className={styles.logoutnav}>
            Logout
          </span>
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import './Navbar.module.scss';
import styles from './Navbar.module.scss';
import { Logo  } from '../../assets/images/Svg';

const Navbar = () => {
  return (
    <div className={styles._main}> 
      <div className={styles._content}>
        <div className={styles._logo}>
          <Logo />
        </div>

        <div className={styles._buttonsParent}>
            <button className={styles._contactBtn}>Contact</button>
            <button className={styles._signUpBtn}>Sign Up</button>
            <button className={styles._registerBtn}>Register</button>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
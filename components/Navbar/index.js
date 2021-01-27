import './Navbar.module.scss';
import styles from './Navbar.module.scss';
import { Logo, Toggle } from '../../assets/images/Svg';

const Navbar = ({reference}) => {

 const scrolling = (ref) => {
    if(ref) {
      const target = ref.current;
      window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
    } 
  }
  
  return (
    <div className={styles._main}> 
      <div className={styles._content}>
        <div className={styles._logo}>
          <Logo />
        </div>

        <div className={styles._buttonsParent}>
            <button className={styles._contactBtn} onClick={() => scrolling(reference)} >Contact</button>
            <button className={styles._signUpBtn}>Sign Up</button>
            <button className={styles._registerBtn}>Register</button>
        </div>

        <div className={styles._toggleParent}>
          <Toggle />
        </div>
      </div>
    </div>
  )
};

export default Navbar;
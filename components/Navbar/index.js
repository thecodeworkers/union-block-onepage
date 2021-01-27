import { useState, useEffect  } from 'react';
import styles from './Navbar.module.scss';
import { Logo, Toggle } from '../../assets/images/Svg';
import './Navbar.module.scss';

const Navbar = ({reference}) => {

  const [show, setShow] = useState(false);
  const [style, setStyle] = useState(styles._newStyle);

 const scrolling = (ref) => {
    if(ref) {
      const target = ref.current;
      window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
    } 
  }

  useEffect(() => {
    window.addEventListener('resize', () => sizeCheck());
  }, [])
  

  const sizeCheck = () => {
    const mediaqueryList = window.matchMedia("(min-width: 768px)");
    if(mediaqueryList.matches) setStyle(styles._newStyle);
  }

  const showMenu = (param) => {
    setShow(!param);
    if(param) return setStyle(styles._buttonsParent);
    if(!param) return setStyle(styles._newStyle);
  }
  
  return (
    <div className={styles._main}> 
      <div className={styles._content}>
        <div className={styles._logo}>
          <Logo />
        </div>

        <div className={!show ? style : styles._buttonsParentShow} >
            <button className={styles._contactBtn} onClick={() => scrolling(reference)} >Contact</button>
            <button className={styles._signUpBtn}>Sign Up</button>
            <button className={styles._registerBtn}>Register</button>
        </div>

        <div className={styles._toggleParent} onClick={() => showMenu(show)} >
          <Toggle />
        </div>
      </div>
    </div>
  )
};

export default Navbar;
import styles from './Footer.module.scss';
import { Twitter, Instagram, Facebook } from '../../assets/images/Svg';

const Footer = () => {

  return (
    <footer className={styles._principal} >
      <div className={styles._items}>
        <div className={styles._sectionOne}>
          <h3>CONTACT</h3>
          <span> dev@unionblock.io</span><br />
          <span> +1 857 200 9823 </span>
        </div>

        <div className={styles._sectionOne}>
          <h3>LOCATION</h3>
          <span> 8 The Green Ste A, Dover, DE 1990 </span><br />
          <span> Union Block LLC </span>
        </div>

        <div className={styles._sectionThree}>
          <span> </span><br />
          <span> </span>
        </div>

        <div className={styles._socialMedia}>
          <div className={styles._iconsParent}>
            <div className={styles._icon}>
              <Instagram />
            </div>

            <div className={styles._icon}>
              <Facebook />
            </div>

            <div className={styles._icon}>
              <Twitter />
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  )
};

export default Footer;
import styles from './Footer.module.scss';
import { Twitter, Instagram, Facebook } from '../../assets/images/Svg';

const Footer = () => {
  return (
    <footer className={styles._principal}>
      <div className={styles._items}>
        <div className={styles._sectionOne}>
          <h3>CONTACT</h3>
          <span> hello@unionblock.io</span><br />
          <span> +44 345 678 903 </span>
        </div>

        <div className={styles._sectionOne}>
          <h3>LOCATION</h3>
          <span> 8 The Green Ste A, Dover, DE 1990 </span><br />
          <span> UNIONBLOCK LLC </span>
        </div>

        <div className={styles._sectionThree}>
          <span> We are always looking for talent </span><br />
          <span> jobs@unionblock.io </span>
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
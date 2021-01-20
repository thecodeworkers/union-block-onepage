import styles from './Banner.module.scss';
import { Grid } from '../../assets/images/Svg';

const Banner = () => {
  return (
    <div className={styles._main}>
      <div className={styles._content}>
        <div className={styles._leftSide}>
          <div className={styles._separation}>
            <p className={styles._leftText} >Building the future through an avant-garde and creative ecosystem.</p>

            <div className={styles.newsletterParent} >
              <input placeholder='Your email' className={styles._emailInput}></input>
              <button className={styles._emailBtn} > More info </button>
            </div>
          </div>

        </div>

        <div className={styles._rightSide}>
          <div className={styles._imageParent}>
            <Grid />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Banner;
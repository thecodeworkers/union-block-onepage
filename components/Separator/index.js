import styles from './Separator.module.scss';
import { InnovationIcon, TrustIcon, TechnologyIcon} from '../../assets/images/Svg';

const Separator = () => {
  return (
    <div className={styles._main}>

      <div className={styles._itemsParent}>

        <div className={styles._featuredCard}>
          <div className={styles._iconParent}>
            <InnovationIcon />
          </div>
          <h1 className={styles._title} >Innovation</h1>
        </div>

        <div className={styles._featuredCard}>
          <div className={styles._iconParent}>
            <TrustIcon />
          </div>
          <h1 className={styles._title} >Trust</h1>
        </div>

        <div className={styles._featuredCard}>
          <div className={styles._iconParent}>
            <TechnologyIcon />
          </div>
          <h1 className={styles._title} >Technology</h1>
        </div>

      </div>
    </div>
  )
}

export default Separator;
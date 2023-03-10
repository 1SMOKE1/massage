import inst from '../../../assets/icons/inst.svg';
import fb from '../../../assets/icons/fb.svg';
import youtube from '../../../assets/icons/youtube.svg';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={`${styles.header} fixed-top`}>
      <div className={styles.container}>
        <div className={styles.header__content}>
          <div className={styles.header__content__block}>
            <h1 className={styles.header__title}>GRACE & HEALTH</h1>
            <div className={styles.header__phones}>
              <a href='phone 1' className="mx-3">+38(067)322-33-22</a>
              <a href='phone 2' className="mx-3">+38(050)322-33-22</a>
            </div>
          </div>
          <div className={styles.header__content__block}>
            <div className={styles.header__social}>
              <a href='inst' className={styles.header__icon__wrap}>
                <img src={inst} alt="" />
              </a>
              <a href='fb' className={styles.header__icon__wrap}>
                <img src={fb} alt="" />
              </a>
              <a href='youtube' className={styles.header__icon__wrap}>
                <img src={youtube} alt="" />
              </a>
            </div>
            <Link to="/price" className={styles.header__link}>Naše cena</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
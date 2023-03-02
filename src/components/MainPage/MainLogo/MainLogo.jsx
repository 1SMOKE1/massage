import logo from '../../../assets/icons/main_logo.svg';
import styles from './MainLogo.module.css';

export const MainLogo = () => {
  return (
    <section className={styles.main_logo}>
      <div className={styles.main_logo__content}>
        <p>GRACE</p>
        <img src={logo} alt="" />
        <p>HEALTH</p>
      </div>
    </section>
  )
}
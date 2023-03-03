import logo from '../../assets/icons/main_logo.svg';
import inst from '../../assets/icons/inst.svg';
import fb from '../../assets/icons/fb.svg';
import youtube from '../../assets/icons/youtube.svg';
import styles from './Footer.module.css';

export const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.logo__wrap} col-4`}>
            <img src={logo} alt="" />
            <h1>GRACE    &    HEALTH</h1>
          </div>  
          <a className='offset-2 col-1' href="naca cena">Naše cena</a>
          <div className={`${styles.contacts} offset-1 col-2`}>
            <h2>KONTAKTY</h2>
            <a href="phone 1">+38(067)322-33-22</a>
            <a href="phone 2">+38(050)322-33-22</a>
            <div className={styles.social__block}>
              <a className='d-block' href="inst">
                <img src={inst} alt="" />
              </a>
              <a className='d-block' href="fb">
                <img src={fb} alt="" />
              </a>
              <a className='d-block' href="youtube">
                <img src={youtube} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
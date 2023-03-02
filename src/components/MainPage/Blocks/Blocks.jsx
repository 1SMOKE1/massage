import { useEffect } from 'react';
import styles from './Blocks.module.css';
import massage_1 from '../../../assets/massage_photo_1.png';
import massage_2 from '../../../assets/massage_photo_2.png';
import massage_3 from '../../../assets/massage_photo_3.png';

import AOS from 'aos';
import 'aos/dist/aos.css';


export const Blocks = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className={styles.blocks}>
      <div className={styles.container}>
        <div className={styles.block}>
          <div className={styles.block__img_wrap} data-aos="fade-right" data-aos-delay="150">
            <img data-aos="zoom-in" data-aos-delay="250" className={styles.block__img} src={massage_1} alt="" />
          </div>
          <div className={`${styles.block__text} ${styles.block__text_content}`} data-aos="fade-left" data-aos-delay="550">
            <h3>MASÁŽE </h3>
            <p>Klasická masáž </p>
            <p>Španělská masáž </p>
            <p>Masáž lávovými kameny</p>
            <p>Medová masáž</p>
            <p>Čokoládová masáž</p>
            <p>Návod na lymfodrenáž</p>
            <p>Lymfodrenážní zařízení </p>
            <p>Bambusové tyče</p>
            <p>Bambusové metly</p>
            <p>Anticelulitidní masáž</p>
            <p>Baňková masáž</p>
            <p>Masáž hlubokých svalů</p>
            <p>Sportovní masáž</p>
            <p>Klasická masáž obličeje</p>
            <p>Španělská masáž obličeje</p>
          </div>
        </div>
        <div className={styles.block}>
          <div className={`${styles.block__text} ${styles.block__text_content}`} data-aos="fade-right" data-aos-delay="250">
          <h3>KOSMETICKÉ ZÁBALY</h3>
          <p>Čokoládový zábal</p>
          <p>Medový zábal</p>
          <p>Zábal z mořských řas</p>
          <p>Zábal z bahna z Mrtvého moře</p>
          </div>
          <div className={styles.block__img_wrap} data-aos="fade-left" data-aos-delay="400">
            <img data-aos="zoom-in" data-aos-delay="500" className={styles.block__img} src={massage_2} alt="" />
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.block__img_wrap} data-aos="fade-right" data-aos-delay="400">
            <img data-aos="zoom-in" data-aos-delay="500" className={styles.block__img} src={massage_3} alt="" />
          </div>
          <div className={`${styles.block__text} ${styles.block__text_content}`} data-aos="fade-left" data-aos-delay="250">  
          <h3>FACIAL CLEANING</h3>
          <h3>HARDWARE KOSMETOLOGIE</h3>
          <p>RF zvedání těla </p>
          <p>RF lifting obličeje</p>
          <p>Ultrazvuková kavitace</p>
          <p>Myostimulace (tři zóny)</p>
          <p>Diamantová dembraze </p>
          <p>Galvanické pokovování </p>
          <p>Darsonval</p>
          </div>
        </div>
      </div>
      <div className={styles.section__bg}></div>
    </section>
    
  )
}
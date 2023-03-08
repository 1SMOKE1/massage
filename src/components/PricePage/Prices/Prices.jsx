
import styles from './Prices.module.css';



export const Prices = () => {
  
  return (
    <section className={styles.prices}>
      <div className={styles.container}>
        <div className={styles.prices__main__block} >
          <div className={styles.block__massage} data-aos="flip-left" data-aos-duration="500"> 
            <h2 className="fw-bold">MASÁŽE</h2>
            <p>Klasická masáž </p>
            <p>Španělská masáž </p>
            <p>Masáž lávovými kameny</p>
            <p>Medová masáž</p>
            <p>Čokoládová masáž</p>
            <p>Návod na lymfodrenáž</p>
            <p>Lymfodrenážní zařízení</p>
            <p>Bambusové tyče</p>
            <p>Bambusové metly</p>
            <p>Anticelulitidní masáž</p>
            <p>Baňková masáž</p>
            <p>Masáž hlubokých svalů</p>
            <p>Sportovní masáž</p>
          </div>
        <div className={styles.block__cosmetic} data-aos="flip-right" data-aos-duration="500">
          <h2 className="fw-bold">KOSMETICKÉ ZÁBALY</h2>
          <p>Čokoládový zábal</p>
          <p>Medový zábal</p>
          <p>Zábal z mořských řas</p>
          <p>Zábal z bahna z Mrtvého moře</p>
        </div>
          <h2 className="fw-bold" data-aos="flip-left" data-aos-duration="500">FACIAL CLEANING</h2>
        <div className={styles.block__hardware__cosmetic}  data-aos="flip-right" data-aos-duration="500">
          <h2 className="fw-bold">HARDWARE KOSMETOLOGIE</h2>
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
      <div className={styles.prices__left__bg}></div>
      <div className={styles.prices__left__bg__mobile}></div>
      <div className={styles.prices__right__bg}></div>
      <div></div>
    </section>
  )
}
import rocks from '../../../assets/services_rocks.svg';
import towel from '../../../assets/services_towel.svg';

import styles from './Services.module.css';

export const Services = () => {
  return (
    <section className={styles.services}>
      <img className={styles.services__img_rocks} src={rocks} alt="" />
      <img className={styles.services__img_towel} src={towel} alt="" />
    </section>
  )
}
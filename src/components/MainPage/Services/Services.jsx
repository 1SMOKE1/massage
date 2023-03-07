import { useEffect, useRef} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChangeBlocks } from '../../../hooks/changeBLocks';
import styles from './Services.module.css';
import { blocksData,} from '../../../constants/blocks.data';


export const Services = ({ onClick }) => {

  const textBlock = useRef();

  const cur = textBlock.current;

  const nextPage = () => (counter === blocksData.length - 1 ? setCounter(0) : setCounter(counter + 1));
  
  const prevPage = () => (counter === 0 ? setCounter(blocksData.length - 1) : setCounter(counter - 1));

  const btnScrollToForm = () => {
    onClick()
  }



  const changeBlocks = ChangeBlocks(blocksData, cur, 8000);
  const [curElement, [counter, setCounter]] = changeBlocks;

  
  
  useEffect(() => {
    AOS.init()
  }, [counter, curElement, setCounter])

  



  return (
    <section className={styles.services}>
      <button className={styles.btn__before} onClick={prevPage}>
        <span></span>
      </button>
      {curElement.map((el) => (
        <div key={el.title} className={styles.services__content}>
          <div className={`${styles.text__block}`} data-aos="fade-right" data-aos-delay="250">
              <h6 data-aos="zoom-out-right" data-aos-delay="350" >{el.title}</h6>
              <p data-aos="zoom-out-right" data-aos-delay="350">
                {el.body}
              </p>
          </div>
          <div data-aos="fade-left" data-aos-delay="450" className={`${styles.photo__block}`}>
            <img className={styles.photo__block__img} src={el.imgSrc} alt="" />
          </div>
        </div>
            ))}
      <button className={styles.btn__scroll}  onClick={btnScrollToForm}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <button className={styles.btn__after} onClick={nextPage}>
        <span></span>
      </button>
    </section>
  )
}
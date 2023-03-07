import { useEffect, useState, useRef, useCallback } from 'react';
import styles from './Form.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Form = ({ onLoad }) => {

  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const formRef = useRef();
  

  const scrollTarget = useCallback(() => {
    onLoad(formRef.current) 
  }, [onLoad])
  


  

  useEffect(() => {
    AOS.init()
    scrollTarget()
  }, [scrollTarget])

  const submitForm = (e) => {
    e.preventDefault()
    const userData = {
      userName, userPhone
    }
    console.log('submit')
    console.log(userData);
  }

  return (
    <section className={styles.form__wrap} onLoad={scrollTarget} id="formRef">
      <form data-aos="fade-up" ref={formRef}>
        <h3 className={`${styles.form__title} text-center` }>ZPĚT VOLAT</h3>
        <p className={`${styles.form__subtitle} text-center`}>Nechte svůj telefon a my vám zavoláme zpět</p>
        <div className={styles.form__fields}>
          <input class onChange={(e) => setUserName(e.target.value)} type="text" placeholder='Název'/>
          <input class onChange={(e) => setUserPhone(e.target.value)} type="tel" placeholder='Telefon'/> 
          <button class onClick={submitForm} className="">Zavolejte mi zpět</button>
        </div>

      </form>
    </section>
  )
}
import { useEffect, useState } from 'react';
import styles from './Form.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Form = () => {

  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');

  useEffect(() => {
    AOS.init()
  }, [])

  const submitForm = (e) => {
    e.preventDefault()
    const userData = {
      userName, userPhone
    }
    console.log('submit')
    console.log(userData);
  }

  return (
    <section className={styles.form__wrap}>
      <form data-aos="fade-up">
        <h3 className={`${styles.form__title} text-center` }>ZPĚT VOLAT</h3>
        <p className={`${styles.form__subtitle} text-center`}>Nechte svůj telefon a my vám zavoláme zpět</p>
        <div className={styles.form__fields}>
          <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder='Název'/>
          <input onChange={(e) => setUserPhone(e.target.value)} type="tel" placeholder='Telefon'/> 
          <button onClick={submitForm} className="">Zavolejte mi zpět</button>
        </div>

      </form>
    </section>
  )
}
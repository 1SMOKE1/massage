import { MainLogo } from "../Share/MainLogo/MainLogo";
import { Form } from '../Share/Form/Form';
import { Prices } from './Prices/Prices';


export const PricePage = () => {

  const scrollTarget = (ref) => {
    
  }

  return (
    <div>
      <MainLogo />
      <Prices />
      <Form onLoad={scrollTarget} />
    </div>
  )
}
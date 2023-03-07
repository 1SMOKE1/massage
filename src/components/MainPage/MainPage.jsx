import { MainLogo } from "./MainLogo/MainLogo";
import { Services } from "./Services/Services";
import { Blocks } from "./Blocks/Blocks";
import { Form } from "./Form/Form";
import { useState } from 'react';
import  scrollTo from "scrollto-animation"


export const MainPage = () => {

  const [formRef, setFormRef] = useState();
  

  const btnScrollToForm = () => {
    scrollTo(formRef, 0, 'easeOutCubic');
  }

  const scrollTarget = (ref) => {
    setFormRef(ref);
  }


  

  return(
    <div>
      <MainLogo />
      <Services onClick={btnScrollToForm} />
      <Blocks />
      <Form onLoad={scrollTarget}/>
    </div>
  )
}
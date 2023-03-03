import { MainLogo } from "./MainLogo/MainLogo";
import { Services } from "./Services/Services";
import { Blocks } from "./Blocks/Blocks";
import { Form } from "./Form/Form";

export const MainPage = () => {
  return(
    <>
      <MainLogo />
      <Services />
      <Blocks />
      <Form />
    </>
  )
}
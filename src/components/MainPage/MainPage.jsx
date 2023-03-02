import { MainLogo } from "./MainLogo/MainLogo";
import { Services } from "./Services/Services";
import { Blocks } from "./Blocks/Blocks";

export const MainPage = () => {
  return(
    <main>
      <MainLogo />
      <Services />
      <Blocks />
    </main>
  )
}
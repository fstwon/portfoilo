import { Header } from "../../components/header/Header.component";
import { MainRouter } from "../../components/mainRouter/MainRouter.component";

export function MainPage() {
  return (
    <div className='main_page_container'>
      <Header />
      <MainRouter />
    </div>
  )
};
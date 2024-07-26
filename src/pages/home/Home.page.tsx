import { HomeRouter } from "./components/homeRouter/HomeRouter.component";
import { HomeSubHeader } from "./components/subHeader/HomeSubHeader.component";
import "./home.styles.scss";

export function HomePage() {
  return (
    <div className="home_page_container" >
      <HomeSubHeader />
      <HomeRouter />
    </div>
  )
};
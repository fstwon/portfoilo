import { HomeSubHeaderMenu } from "./components/homeSubHeaderMenu/HomeSubHeaderMenu.component";
import "./homeSubHeader.styles.scss";

export function HomeSubHeader() {

  return (
    <div className='home_sub_header_container' >
      <HomeSubHeaderMenu />
    </div>
  )
};
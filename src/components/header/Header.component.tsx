import { HeaderLogoLinkButton } from "./components/headerLogoButton/HeaderLogoLinkButton.component";
import { HeaderMenu } from "./components/headerMenu/HeaderMenu.component";
import "./header.styles.scss";

export function Header() {

  return (
    <header className='header_container'>
      <HeaderLogoLinkButton />
      <HeaderMenu />
    </header>
  )
};
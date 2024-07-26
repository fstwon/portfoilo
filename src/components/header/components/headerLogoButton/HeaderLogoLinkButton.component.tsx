import { SoTextLogo } from "../../../../resource/svg/text_logo/TextLogo";
import { NavLink } from "react-router-dom";
import "./headerLogoLinkButton.styles.scss";

export function HeaderLogoLinkButton() {

  return (
    <NavLink className='header_logo_link' to='/' >
      <SoTextLogo className={'header_logo'} />
    </NavLink>
  )
};
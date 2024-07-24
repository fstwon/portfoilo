import { Link } from "react-router-dom";
import { SoTextLogo } from "../../../../resource/images/text_logo/TextLogo";
import "./headerLogoLinkButton.styles.scss";

export function HeaderLogoLinkButton() {

  return (
    <Link className='header_logo_link' to='/' >
      <SoTextLogo className={'header_logo'} />
    </Link>
  )
};
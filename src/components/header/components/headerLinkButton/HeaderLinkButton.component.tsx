import { Link } from "react-router-dom";
import "./headerLinkButton.styles.scss";

interface IHeaderButton {
  children: React.ReactNode;
  linkPath: string;
};

export function HeaderLinkButton({children, linkPath}: IHeaderButton) {
  return (
    <Link className='header_link_button' to={linkPath} >
      {children}
    </Link>
  )
};
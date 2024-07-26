import classNames from "classnames";
import { NavLink } from "react-router-dom";
import "./navLinkButton.styles.scss";

export interface ILinkButton {
  className: string | null;
  children: string | React.ReactNode;
  linkPath: string;
};

export function NavLinkButton({className, children, linkPath}: ILinkButton) {
  return (
    <NavLink className={classNames('link_button', className)} to={linkPath} >
      {children}
    </NavLink>
  )
};

export function HoverStyleNavLinkButton({className, children, linkPath}: ILinkButton) {
  return (
    <NavLinkButton className={classNames('link_hover_style_button_container', className)} linkPath={linkPath} >
      <div className='link_hover_style_button_label' >
        {children}
      </div>
    </NavLinkButton>
  )
};
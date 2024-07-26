import { ILinkButton, HoverStyleNavLinkButton } from "../../../linkButton/NavLink.component";
import "./headerLinkButton.styles.scss"

export function HeaderLinkButton({...props}: ILinkButton) {
  return (
    <HoverStyleNavLinkButton {...props}  >
      {props.children}
    </HoverStyleNavLinkButton>
  )
};
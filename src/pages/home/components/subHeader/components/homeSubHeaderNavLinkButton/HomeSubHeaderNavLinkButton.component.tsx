import { ILinkButton, HoverStyleNavLinkButton } from "../../../../../../components/linkButton/NavLink.component";
import "./homeSubHeaderNavLinkButton.styles.scss";

export function HomeSubHeaderNavLinkButton({...props}: ILinkButton) {
  return (
    <HoverStyleNavLinkButton {...props} >
      {props.children}
    </HoverStyleNavLinkButton>
  )
};
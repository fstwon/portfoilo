import { ILink, useHeaderState } from "../../hooks/useHeaderState/useHeaderState.hook";
import { HeaderLinkButton } from "../headerLinkButton/HeaderLinkButton.component";
import "./headerMenu.styles.scss";

export function HeaderMenu() {
  const { linkList } = useHeaderState()

  return (
    <div className='header_menu_container' >
      {
        linkList.map((link: ILink) => {
          return (
            <HeaderLinkButton key={link.id} linkPath={link.path} >
              {link.linkName}
            </HeaderLinkButton>
          )
        })
      }
    </div>
  )
};
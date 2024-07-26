import { IHeaderMenu, useHeaderState } from "../../hooks/useHeaderState/useHeaderState.hook";
import classNames from "classnames";
import { HeaderLinkButton } from "../headerLinkButton/HeaderLinkButton.component";
import "./headerMenu.styles.scss";

export function HeaderMenu() {
  const { linkList } = useHeaderState()

  return (
    <div className='header_menu_container' >
      {
        linkList.map((link: IHeaderMenu) => {
          return (
            <HeaderLinkButton className='header_menu_link_button' linkPath={link.linkPath} key={link.id} >
              {link.linkName}
            </HeaderLinkButton>
          )
        })
      }
    </div>
  )
};
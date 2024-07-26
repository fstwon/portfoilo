import { IHeaderMenu } from "../../../../../../components/header/hooks/useHeaderState/useHeaderState.hook"
import { useSubHeaderState } from "../../hooks/useSubHeaderState/useSubHeaderState.hook"
import { HomeSubHeaderNavLinkButton } from "../homeSubHeaderNavLinkButton/HomeSubHeaderNavLinkButton.component"

export function HomeSubHeaderMenu() {
  const { linkList } = useSubHeaderState()

  return (
    <div className='home_sub_header_menu_container' >
      {
        linkList.map((link: IHeaderMenu) => {
          return (
            <HomeSubHeaderNavLinkButton className='home_sub_header_link_button' linkPath={link.linkPath} key={link.id} >
              {link.linkName}
            </HomeSubHeaderNavLinkButton>
          )
        })
      }
    </div>
  )
};
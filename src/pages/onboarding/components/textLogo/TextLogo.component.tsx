import { useSelector } from "react-redux";
import { SoTextLogo } from "../../../../resource/images/text_logo/TextLogo";
import { RootState } from "../../../../redux/Root.redux";
import classNames from "classnames"
import "./textLogo.styles.scss";

export function TextLogo() {
  const { IS_INIT_RENDER } = useSelector((state: RootState) => state.AppReducer)

  return (
    <SoTextLogo className={classNames('onboarding_page_text_logo', !IS_INIT_RENDER && 'shrink_logo')} />  
  )
};
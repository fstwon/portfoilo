import { useEffect, useState } from "react";
import { FirstWord } from "./components/firstWord/FirstWord.component";
import { SecondWord } from "./components/secondWord/SecondWord.component";
import { RootState } from "../../redux/Root.redux";
import { useSelector } from "react-redux";
import { TextLogo } from "./components/textLogo/TextLogo.component";
import classNames from "classnames";
import "./onboarding.styles.scss";

export const MAIN_CLASS_NAME = '';

export function OnboardingPage() {
  const { IS_INIT_RENDER } = useSelector((state: RootState) => state.AppReducer)
  
  return (
    <div className={classNames('onboarding_page_container', !IS_INIT_RENDER && 'hidden_trans' )} >
      <section className='onboarding_page_name_section' >
        {IS_INIT_RENDER ?
          <>
            <FirstWord />
            <SecondWord />
          </> 
        : <TextLogo />
        }
      </section>
    </div>
  )
};
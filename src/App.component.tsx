import { useSelector } from "react-redux";
import { OnboardingPage } from "./pages/onboarding/Onboarding.page";
import { MainPage } from "./pages/main/main.page";
import { RootState } from "./redux/Root.redux";
import { TextLogo } from "./pages/onboarding/components/textLogo/TextLogo.component";
import { useEffect, useRef, useState } from "react";
import "./app.styles.scss";

type TIsDoneOnboarding = boolean;

function App() {
  const { IS_INIT_RENDER } = useSelector((state: RootState) => state.AppReducer);
  const [isDoneOnboarding, setIsDoneOnboarding] = useState<TIsDoneOnboarding>(() => false)
  const onBoardingTimeoutId = useRef<ReturnType <typeof setTimeout>>()
  
  useEffect(() => {
    console.log(process)
  }, [])

  useEffect(() => {
    if(!IS_INIT_RENDER) {
      onBoardingTimeoutId.current = setTimeout(() => {
        setIsDoneOnboarding(() => true)
        clearTimeout(onBoardingTimeoutId.current)
      }, 2300)
    }
  }, [IS_INIT_RENDER])

  return (
    <div className="App" >
      {!isDoneOnboarding && <OnboardingPage />}
      <MainPage />
    </div>
  )
};

export default App;
import { useSelector } from "react-redux";
import { OnboardingPage } from "./pages/onboarding/Onboarding.page";
import { RootState } from "./redux/Root.redux";
import { useEffect, useRef, useState } from "react";
import { MainRouter } from "./components/mainRouter/MainRouter.component";
import { Header } from "./components/header/Header.component";
import "./app.styles.scss";

type TIsDoneOnboarding = boolean;

function App() {
  const { IS_INIT_RENDER } = useSelector((state: RootState) => state.AppReducer);
  const [isDoneOnboarding, setIsDoneOnboarding] = useState<TIsDoneOnboarding>(() => false)
  const onBoardingTimeoutId = useRef<ReturnType <typeof setTimeout>>()

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
      {/* {!isDoneOnboarding && <OnboardingPage />} */}
      <Header />
      <MainRouter />
    </div>
  )
};

export default App;
import { Route, Routes } from "react-router-dom";
import { useSubHeaderState } from "../subHeader/hooks/useSubHeaderState/useSubHeaderState.hook";
import { IHeaderMenu } from "../../../../components/header/hooks/useHeaderState/useHeaderState.hook";

export function HomeRouter() {
  const { linkList } = useSubHeaderState();

  return (
    <Routes >
      {  
        linkList.map((link: IHeaderMenu) => {
          return (
            <Route key={link.id} path={link.linkPath} element={link.element} />
          )
        })
      }
    </Routes>
  )
};
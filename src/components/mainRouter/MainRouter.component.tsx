import { Route, Routes } from "react-router-dom";
import { ILink, useHeaderState } from "../header/hooks/useHeaderState/useHeaderState.hook";

export function MainRouter() {
  const { linkList } = useHeaderState()

  return (
    <Routes>
      {  
        linkList.map((link: ILink) => {
          return (
            <Route key={link.id} path={link.path} element={link.element} />
          )
        })
      }
    </Routes>
  )
};
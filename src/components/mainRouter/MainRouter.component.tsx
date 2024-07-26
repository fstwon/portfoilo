import { Navigate, Route, Routes } from "react-router-dom";
import { IHeaderMenu, useHeaderState } from "../header/hooks/useHeaderState/useHeaderState.hook";

export function MainRouter() {
  const { linkList } = useHeaderState()

  return (
    <Routes>
      {  
        linkList.map((link: IHeaderMenu) => {
          return (
            <Route key={link.id} path={link.linkPath} element={link.element} />
          )
        })
      }
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
};
import { useState } from "react"
import { IntroductionPage } from "../../../../pages/introduction/introduction.page";
import { WorkPage } from "../../../../pages/work/Work.page";
import { IHeaderMenu } from "../../../../../../components/header/hooks/useHeaderState/useHeaderState.hook";

interface ISubHeaderLinkRoutes {
  INTRODUCTION: string;
  WORK: string;
};

const SUB_HEADER_LINK_ROUTES: ISubHeaderLinkRoutes = {
  INTRODUCTION: 'introduction',
  WORK: 'work'
};

const elementList: {[key: string]: React.ReactElement} = {
  introduction: <IntroductionPage />,
  work: <WorkPage />
};

export function useSubHeaderState() {
  const [linkList] = useState<IHeaderMenu[]>(() => {
    const linkNameList = Object.values(SUB_HEADER_LINK_ROUTES);
    const linkList = linkNameList.map((linkName, index) => {
      let linkPath = `/${linkName}`;

      return {
        id: index,
        linkName: linkName.toUpperCase(),
        linkPath,
        element: elementList[linkName]
      }
    })
    return linkList;
  })
  
  return {
    linkList
  }
};
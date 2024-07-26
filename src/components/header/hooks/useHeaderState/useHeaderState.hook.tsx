import { useState } from "react";
import { BlogMainPage } from "../../../../pages/blog/blog.main.page";
import { IntroductionPage } from "../../../../pages/home/pages/introduction/introduction.page";
import { ProjectMainPage } from "../../../../pages/project/project.main.page";
import { HomePage } from "../../../../pages/home/Home.page";

interface IHeaderLinkRoutes {
  HOME: string;
  BLOG: string;
  PROJECT: string;
};

const HEADER_LINK_ROUTES: IHeaderLinkRoutes = {
  HOME: 'home',
  BLOG: 'blog',
  PROJECT: 'project'
};

const elementList: {[key: string]: React.ReactElement} = {
  home: <HomePage />,
  blog: <BlogMainPage />,
  project: <ProjectMainPage />
};

export interface IHeaderMenu {
  id: number,
  linkName: string;
  linkPath: string;
  element: React.ReactElement
}

export function useHeaderState() {
  const [linkList] = useState<IHeaderMenu[]>(() => {
    const linkNameList = Object.values(HEADER_LINK_ROUTES);
    const linkList = linkNameList.map((linkName, index) => {
      let linkPath = `/${linkName}`;

      if(linkName === HEADER_LINK_ROUTES.HOME) {
        linkPath = '*'
      }

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
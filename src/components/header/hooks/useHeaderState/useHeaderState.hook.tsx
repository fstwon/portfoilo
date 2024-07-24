import { useState } from "react";
import { BlogMainPage } from "../../../../pages/blog/blog.main.page";
import { MainPage } from "../../../../pages/main/main.page";
import { ProjectMainPage } from "../../../../pages/project/project.main.page";
import { HomePage } from "../../../../pages/home/Home.page";

interface THeaderLinkRoutes {
  HOME: string;
  BLOG: string;
  PROJECT: string;
};

const HEADER_LINK_ROUTES: THeaderLinkRoutes = {
  HOME: 'home',
  BLOG: 'blog',
  PROJECT: 'project'
};

const elementList: {[key: string]: React.ReactElement} = {
  home: <HomePage />,
  blog: <BlogMainPage />,
  project: <ProjectMainPage />
};

export interface ILink {
  id: number;
  linkName: string;
  path: string;
  element: React.ReactElement
}

export function useHeaderState() {
  const [linkList] = useState<ILink[]>(() => {
    const linkNameList = Object.values(HEADER_LINK_ROUTES);
    const linkList = linkNameList.map((linkName, index) => {
      let path = `/${linkName}`;

      if(linkName === HEADER_LINK_ROUTES.HOME) {
        path = '/'
      }

      return {
        id: index,
        linkName: linkName.toUpperCase(),
        path,
        element: elementList[linkName]
      }
    })
    return linkList;
  })

  return {
    linkList
  }
};
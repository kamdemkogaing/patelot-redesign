import { IHeaderNavigation } from "./header-navigation-types";
import { ITopNavigation } from "./top-navigation-types";

export type IHeader = {
  topNavigation?: ITopNavigation;
  headerNavigation?: IHeaderNavigation;
};

export type IHeaderContext = {
  overlap: boolean;
  headerHeight?: number;
  setHeaderHeight: (height: number) => void;
  setOverlap: (overlap: boolean) => void;
};

import {
  PrimitiveImage,
  PrimitiveLink,
  PrimitiveString,
  PrimitiveText,
} from "..";

export enum FlyoutLayout {
  DEFAULT = "default",
  IONOS = "ionos",
  ONE_AND_ONE = "1and1",
}

export type IToggleLinksContent = {
  context?: PrimitiveString;

  label?: PrimitiveText;

  link?: PrimitiveLink;

  linkId?: PrimitiveString;
};

export type IToggleLinks = {
  type?: PrimitiveString;

  categories?: PrimitiveString;

  content?: IToggleLinksContent;
};

export type ITopNavigationEntriesContent = {
  label?: PrimitiveText;

  menuLinkText?: PrimitiveText;

  menuImage?: PrimitiveImage;

  menuImageSubline?: PrimitiveText;

  flyoutLayout?: FlyoutLayout;

  //menuLink?: any;

  //link?: any;

  description?: PrimitiveText;

  submenuBlock?: ITopNavigationSubmenuBlock[];

  submenuEntries?: ITopNavigationSubmenuEntries[];
};

export type ITopNavigationSubmenuEntries = {
  label?: PrimitiveText;

  link?: PrimitiveLink;

  linkId?: PrimitiveText;
};

export type ITopNavigationSubmenuBlock = {
  type?: PrimitiveString;

  content?: ITopNavigationEntriesContent;
};

export type ITopNavigationEntries = {
  entrieType?: PrimitiveString;

  categories?: PrimitiveString;

  content?: ITopNavigationEntriesContent;

  menuLink?: PrimitiveLink;
};

export type ITopNavigation = {
  children?: React.ReactNode;
  toggleLinks?: IToggleLinks[];

  topNavigationEntries?: ITopNavigationEntries[];

  minimizeHeader?: boolean;
};

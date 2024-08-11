import { PrimitiveLink, PrimitiveString, PrimitiveText } from "..";

export type IFlyoutType = "simple" | "complex";

export type IHeaderIcon = {
  src?: PrimitiveString;

  alt?: PrimitiveString;

  content?: PrimitiveString;

  height?: number;

  width?: number;

  extension?: PrimitiveString;
};

export type ISubLink = {
  name: PrimitiveString;

  badge?: string;

  description?: PrimitiveString;

  linkId?: PrimitiveString;

  href: PrimitiveString;
};

export type IHeaderLink = {
  name?: PrimitiveString;

  description?: PrimitiveString;

  badge?: string;

  linkId?: PrimitiveString;

  href?: PrimitiveString;

  icon?: IHeaderIcon;

  subLinks?: ISubLink[];
};

export type IFlyoutStickyItems = {
  name?: PrimitiveString;

  href?: PrimitiveString;

  linkId?: PrimitiveString;

  subline?: PrimitiveString;

  icon?: IHeaderIcon;
};

export type IFlyoutItems = {
  name?: PrimitiveString;

  links?: IHeaderLink[];
};

export type IHeaderFlyout = {
  type?: IFlyoutType;

  headline?: PrimitiveString;

  description?: PrimitiveString;

  links?: IHeaderLink[];

  items?: IFlyoutItems[];

  stickyItems?: IFlyoutStickyItems[];

  stickyItemsHeadline?: PrimitiveString;
};

export type IHeaderNavigationItems = {
  name: PrimitiveString;
  badge?: string;
  flyout: IHeaderFlyout;
};

export type INavigationButton = {
  label?: PrimitiveText;

  link: PrimitiveLink;
};

// export type IHeaderNavigationMore = {} maybe for core
export type IHeaderNavigation = {
  navigationButton?: INavigationButton;

  items?: IHeaderNavigationItems[];
};

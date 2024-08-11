import { isEmpty } from "lodash";
import { IHeaderLink, ISubLink, isValidString } from "..";

export const isValidSubLink = (subLink?: ISubLink) => {
  return (
    !isEmpty(subLink) &&
    isValidString(subLink.href) &&
    isValidString(subLink.name)
  );
};

export const isValidHeaderLink = (link: IHeaderLink) => {
  return isValidString(link.name) && isValidString(link.href);
};
